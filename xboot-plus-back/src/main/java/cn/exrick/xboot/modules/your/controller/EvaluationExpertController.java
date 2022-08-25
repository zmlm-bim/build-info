package cn.exrick.xboot.modules.your.controller;

import cn.exrick.xboot.base.XbootBaseController;
import cn.exrick.xboot.common.utils.PageUtil;
import cn.exrick.xboot.common.utils.ResultUtil;
import cn.exrick.xboot.common.vo.PageVo;
import cn.exrick.xboot.common.vo.Result;
import cn.exrick.xboot.common.vo.SearchVo;
import cn.exrick.xboot.modules.your.entity.EvaluationExpert;
import cn.exrick.xboot.modules.your.service.EvaluationExpertService;
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
@Api(tags = "评标专家管理接口")
@RequestMapping("/xboot/evaluationExpert")
@Transactional
public class EvaluationExpertController extends XbootBaseController<EvaluationExpert, String> {

    @Autowired
    private EvaluationExpertService evaluationExpertService;

    @Override
    public EvaluationExpertService getService() {
        return evaluationExpertService;
    }


    @RequestMapping(value = "/getByCondition", method = RequestMethod.GET)
    @ApiOperation(value = "多条件分页获取")
    public Result<Page<EvaluationExpert>> getByCondition(EvaluationExpert evaluationExpert, SearchVo searchVo, PageVo pageVo) {

        Page<EvaluationExpert> page = evaluationExpertService.findByCondition(evaluationExpert, searchVo, PageUtil.initPage(pageVo));
        return new ResultUtil<Page<EvaluationExpert>>().setData(page);
    }

}
