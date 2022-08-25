package cn.exrick.xboot.modules.your.service;

import cn.exrick.xboot.base.XbootBaseService;
import cn.exrick.xboot.modules.your.entity.EvaluationExpert;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import cn.exrick.xboot.common.vo.SearchVo;

import java.util.List;

/**
 * 评标专家接口
 * @author cgb
 */
public interface EvaluationExpertService extends XbootBaseService<EvaluationExpert, String> {

    /**
    * 多条件分页获取
    * @param evaluationExpert
    * @param searchVo
    * @param pageable
    * @return
    */
    Page<EvaluationExpert> findByCondition(EvaluationExpert evaluationExpert, SearchVo searchVo, Pageable pageable);

}