package cn.exrick.xboot.modules.your.controller;

import cn.exrick.xboot.base.XbootBaseController;
import cn.exrick.xboot.common.utils.PageUtil;
import cn.exrick.xboot.common.utils.ResultUtil;
import cn.exrick.xboot.common.vo.PageVo;
import cn.exrick.xboot.common.vo.Result;
import cn.exrick.xboot.common.vo.SearchVo;
import cn.exrick.xboot.modules.your.entity.ProjectInfo;
import cn.exrick.xboot.modules.your.service.ProjectInfoService;
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
@Api(tags = "项目信息管理接口")
@RequestMapping("/xboot/projectInfo")
@Transactional
public class ProjectInfoController extends XbootBaseController<ProjectInfo, String> {

    @Autowired
    private ProjectInfoService projectInfoService;

    @Override
    public ProjectInfoService getService() {
        return projectInfoService;
    }


    @RequestMapping(value = "/getByCondition", method = RequestMethod.GET)
    @ApiOperation(value = "多条件分页获取")
    public Result<Page<ProjectInfo>> getByCondition(ProjectInfo projectInfo, SearchVo searchVo, PageVo pageVo) {

        Page<ProjectInfo> page = projectInfoService.findByCondition(projectInfo, searchVo, PageUtil.initPage(pageVo));
        return new ResultUtil<Page<ProjectInfo>>().setData(page);
    }

}
