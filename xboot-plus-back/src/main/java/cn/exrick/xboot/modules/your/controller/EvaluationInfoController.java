package cn.exrick.xboot.modules.your.controller;

import cn.exrick.xboot.base.XbootBaseController;
import cn.exrick.xboot.common.utils.PageUtil;
import cn.exrick.xboot.common.utils.ResultUtil;
import cn.exrick.xboot.common.vo.PageVo;
import cn.exrick.xboot.common.vo.Result;
import cn.exrick.xboot.common.vo.SearchVo;
import cn.exrick.xboot.modules.your.entity.EvaluationInfo;
import cn.exrick.xboot.modules.your.service.EvaluationInfoService;
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
@Api(tags = "评标信息管理接口")
@RequestMapping("/xboot/evaluationInfo")
@Transactional
public class EvaluationInfoController extends XbootBaseController<EvaluationInfo, String> {

    @Autowired
    private EvaluationInfoService evaluationInfoService;

    @Override
    public EvaluationInfoService getService() {
        return evaluationInfoService;
    }


    @RequestMapping(value = "/getByCondition", method = RequestMethod.GET)
    @ApiOperation(value = "多条件分页获取")
    public Result<Page<EvaluationInfo>> getByCondition(EvaluationInfo evaluationInfo, SearchVo searchVo, PageVo pageVo) {

        Page<EvaluationInfo> page = evaluationInfoService.findByCondition(evaluationInfo, searchVo, PageUtil.initPage(pageVo));
        return new ResultUtil<Page<EvaluationInfo>>().setData(page);
    }

}
