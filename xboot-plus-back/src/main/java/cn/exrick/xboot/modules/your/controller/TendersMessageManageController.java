package cn.exrick.xboot.modules.your.controller;

import cn.exrick.xboot.base.XbootBaseController;
import cn.exrick.xboot.common.utils.PageUtil;
import cn.exrick.xboot.common.utils.ResultUtil;
import cn.exrick.xboot.common.vo.PageVo;
import cn.exrick.xboot.common.vo.Result;
import cn.exrick.xboot.common.vo.SearchVo;
import cn.exrick.xboot.modules.your.entity.TendersMessageManage;
import cn.exrick.xboot.modules.your.service.TendersMessageManageService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;
import org.springframework.transaction.annotation.Transactional;

/**
 * @author jj
 */
@Slf4j
@RestController
@Api(tags = "标段信息管理管理接口")
@RequestMapping("/xboot/tendersMessageManage")
@Transactional
public class TendersMessageManageController extends XbootBaseController<TendersMessageManage, String> {

    @Autowired
    private TendersMessageManageService tendersMessageManageService;

    @Override
    public TendersMessageManageService getService() {
        return tendersMessageManageService;
    }


    @RequestMapping(value = "/getByCondition", method = RequestMethod.GET)
    @ApiOperation(value = "多条件分页获取")
    public Result<Page<TendersMessageManage>> getByCondition(TendersMessageManage tendersMessageManage, SearchVo searchVo, PageVo pageVo) {

        Page<TendersMessageManage> page = tendersMessageManageService.findByCondition(tendersMessageManage, searchVo, PageUtil.initPage(pageVo));
        return new ResultUtil<Page<TendersMessageManage>>().setData(page);
    }

}
