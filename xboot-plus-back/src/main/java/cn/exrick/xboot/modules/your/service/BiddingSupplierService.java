package cn.exrick.xboot.modules.your.service;

import cn.exrick.xboot.base.XbootBaseService;
import cn.exrick.xboot.modules.your.entity.BiddingSupplier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import cn.exrick.xboot.common.vo.SearchVo;

import java.util.List;

/**
 * 投标供应商接口
 * @author cgb
 */
public interface BiddingSupplierService extends XbootBaseService<BiddingSupplier, String> {

    /**
    * 多条件分页获取
    * @param biddingSupplier
    * @param searchVo
    * @param pageable
    * @return
    */
    Page<BiddingSupplier> findByCondition(BiddingSupplier biddingSupplier, SearchVo searchVo, Pageable pageable);

}