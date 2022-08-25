package cn.exrick.xboot.modules.your.service;

import cn.exrick.xboot.base.XbootBaseService;
import cn.exrick.xboot.modules.your.entity.BiddingInfo;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import cn.exrick.xboot.common.vo.SearchVo;

import java.util.List;

/**
 * 投标信息接口
 * @author cgb
 */
public interface BiddingInfoService extends XbootBaseService<BiddingInfo, String> {

    /**
    * 多条件分页获取
    * @param biddingInfo
    * @param searchVo
    * @param pageable
    * @return
    */
    Page<BiddingInfo> findByCondition(BiddingInfo biddingInfo, SearchVo searchVo, Pageable pageable);

}