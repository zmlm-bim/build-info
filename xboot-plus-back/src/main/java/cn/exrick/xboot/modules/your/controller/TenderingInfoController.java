package cn.exrick.xboot.modules.your.controller;

import cn.exrick.xboot.base.XbootBaseController;
import cn.exrick.xboot.common.utils.PageUtil;
import cn.exrick.xboot.common.utils.ResultUtil;
import cn.exrick.xboot.common.vo.PageVo;
import cn.exrick.xboot.common.vo.Result;
import cn.exrick.xboot.common.vo.SearchVo;
import cn.exrick.xboot.modules.your.entity.TenderingInfo;
import cn.exrick.xboot.modules.your.service.TenderingInfoService;
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
@Api(tags = "招标信息管理管理接口")
@RequestMapping("/xboot/tenderingInfo")
@Transactional
public class TenderingInfoController extends XbootBaseController<TenderingInfo, String> {

    @Autowired
    private TenderingInfoService tenderingInfoService;

    @Override
    public TenderingInfoService getService() {
        return tenderingInfoService;
    }


    @RequestMapping(value = "/getByCondition", method = RequestMethod.GET)
    @ApiOperation(value = "多条件分页获取")
    public Result<Page<TenderingInfo>> getByCondition(TenderingInfo tenderingInfo, SearchVo searchVo, PageVo pageVo) {

        Page<TenderingInfo> page = tenderingInfoService.findByCondition(tenderingInfo, searchVo, PageUtil.initPage(pageVo));
        return new ResultUtil<Page<TenderingInfo>>().setData(page);
    }

}
