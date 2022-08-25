package cn.exrick.xboot.modules.your.service;

import cn.exrick.xboot.base.XbootBaseService;
import cn.exrick.xboot.modules.your.entity.EvaluationInfo;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import cn.exrick.xboot.common.vo.SearchVo;

import java.util.List;

/**
 * 评标信息接口
 * @author cgb
 */
public interface EvaluationInfoService extends XbootBaseService<EvaluationInfo, String> {

    /**
    * 多条件分页获取
    * @param evaluationInfo
    * @param searchVo
    * @param pageable
    * @return
    */
    Page<EvaluationInfo> findByCondition(EvaluationInfo evaluationInfo, SearchVo searchVo, Pageable pageable);

}