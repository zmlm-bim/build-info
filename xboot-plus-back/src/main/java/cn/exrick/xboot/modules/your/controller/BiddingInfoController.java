package cn.exrick.xboot.modules.your.controller;

import cn.exrick.xboot.base.XbootBaseController;
import cn.exrick.xboot.common.utils.PageUtil;
import cn.exrick.xboot.common.utils.ResultUtil;
import cn.exrick.xboot.common.vo.PageVo;
import cn.exrick.xboot.common.vo.Result;
import cn.exrick.xboot.common.vo.SearchVo;
import cn.exrick.xboot.modules.your.entity.BiddingInfo;
import cn.exrick.xboot.modules.your.service.BiddingInfoService;
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
@Api(tags = "投标信息管理接口")
@RequestMapping("/xboot/biddingInfo")
@Transactional
public class BiddingInfoController extends XbootBaseController<BiddingInfo, String> {

    @Autowired
    private BiddingInfoService biddingInfoService;

    @Override
    public BiddingInfoService getService() {
        return biddingInfoService;
    }


    @RequestMapping(value = "/getByCondition", method = RequestMethod.GET)
    @ApiOperation(value = "多条件分页获取")
    public Result<Page<BiddingInfo>> getByCondition(BiddingInfo biddingInfo, SearchVo searchVo, PageVo pageVo) {

        Page<BiddingInfo> page = biddingInfoService.findByCondition(biddingInfo, searchVo, PageUtil.initPage(pageVo));
        return new ResultUtil<Page<BiddingInfo>>().setData(page);
    }

}
