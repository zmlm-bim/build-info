package cn.exrick.xboot.modules.your.controller;

import cn.exrick.xboot.base.XbootBaseController;
import cn.exrick.xboot.common.utils.PageUtil;
import cn.exrick.xboot.common.utils.ResultUtil;
import cn.exrick.xboot.common.vo.PageVo;
import cn.exrick.xboot.common.vo.Result;
import cn.exrick.xboot.common.vo.SearchVo;
import cn.exrick.xboot.modules.your.entity.BiddingSupplier;
import cn.exrick.xboot.modules.your.service.BiddingSupplierService;
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
@Api(tags = "投标供应商管理接口")
@RequestMapping("/xboot/biddingSupplier")
@Transactional
public class BiddingSupplierController extends XbootBaseController<BiddingSupplier, String> {

    @Autowired
    private BiddingSupplierService biddingSupplierService;

    @Override
    public BiddingSupplierService getService() {
        return biddingSupplierService;
    }


    @RequestMapping(value = "/getByCondition", method = RequestMethod.GET)
    @ApiOperation(value = "多条件分页获取")
    public Result<Page<BiddingSupplier>> getByCondition(BiddingSupplier biddingSupplier, SearchVo searchVo, PageVo pageVo) {

        Page<BiddingSupplier> page = biddingSupplierService.findByCondition(biddingSupplier, searchVo, PageUtil.initPage(pageVo));
        return new ResultUtil<Page<BiddingSupplier>>().setData(page);
    }

}
