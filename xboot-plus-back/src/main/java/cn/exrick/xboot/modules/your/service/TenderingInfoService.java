package cn.exrick.xboot.modules.your.service;

import cn.exrick.xboot.base.XbootBaseService;
import cn.exrick.xboot.modules.your.entity.TenderingInfo;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import cn.exrick.xboot.common.vo.SearchVo;

import java.util.List;

/**
 * 招标信息管理接口
 * @author cgb
 */
public interface TenderingInfoService extends XbootBaseService<TenderingInfo, String> {

    /**
    * 多条件分页获取
    * @param tenderingInfo
    * @param searchVo
    * @param pageable
    * @return
    */
    Page<TenderingInfo> findByCondition(TenderingInfo tenderingInfo, SearchVo searchVo, Pageable pageable);

}