package cn.exrick.xboot.modules.your.controller;

import cn.exrick.xboot.base.XbootBaseController;
import cn.exrick.xboot.common.utils.PageUtil;
import cn.exrick.xboot.common.utils.ResultUtil;
import cn.exrick.xboot.common.vo.PageVo;
import cn.exrick.xboot.common.vo.Result;
import cn.exrick.xboot.common.vo.SearchVo;
import cn.exrick.xboot.modules.your.entity.TenderingPlan;
import cn.exrick.xboot.modules.your.service.TenderingPlanService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;
import org.springframework.transaction.annotation.Transactional;

/**
 * @author cgb
 */
@Slf4j
@RestController
@Api(tags = "招标计划管理接口")
@RequestMapping("/xboot/tenderingPlan")
@Transactional
public class TenderingPlanController extends XbootBaseController<TenderingPlan, String> {

    @Autowired
    private TenderingPlanService tenderingPlanService;

    @Override
    public TenderingPlanService getService() {
        return tenderingPlanService;
    }


    @RequestMapping(value = "/getByCondition", method = RequestMethod.GET)
    @ApiOperation(value = "多条件分页获取")
    public Result<Page<TenderingPlan>> getByCondition(TenderingPlan tenderingPlan, SearchVo searchVo, PageVo pageVo) {

        Page<TenderingPlan> page = tenderingPlanService.findByCondition(tenderingPlan, searchVo, PageUtil.initPage(pageVo));
        return new ResultUtil<Page<TenderingPlan>>().setData(page);
    }

}
