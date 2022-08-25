package cn.exrick.xboot.modules.your.service;

import cn.exrick.xboot.base.XbootBaseService;
import cn.exrick.xboot.modules.your.entity.TenderingPlan;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import cn.exrick.xboot.common.vo.SearchVo;

import java.util.List;

/**
 * 招标计划接口
 * @author cgb
 */
public interface TenderingPlanService extends XbootBaseService<TenderingPlan, String> {

    /**
    * 多条件分页获取
    * @param tenderingPlan
    * @param searchVo
    * @param pageable
    * @return
    */
    Page<TenderingPlan> findByCondition(TenderingPlan tenderingPlan, SearchVo searchVo, Pageable pageable);

}