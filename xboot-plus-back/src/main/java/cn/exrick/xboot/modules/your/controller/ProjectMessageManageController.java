package cn.exrick.xboot.modules.your.controller;

import cn.exrick.xboot.base.XbootBaseController;
import cn.exrick.xboot.common.utils.PageUtil;
import cn.exrick.xboot.common.utils.ResultUtil;
import cn.exrick.xboot.common.vo.PageVo;
import cn.exrick.xboot.common.vo.Result;
import cn.exrick.xboot.common.vo.SearchVo;
import cn.exrick.xboot.modules.your.entity.ProjectMessageManage;
import cn.exrick.xboot.modules.your.service.ProjectMessageManageService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;
import org.springframework.transaction.annotation.Transactional;

/**
 * @author jj
 */
@Slf4j
@RestController
@Api(tags = "项目信息管理管理接口")
@RequestMapping("/xboot/projectMessageManage")
@Transactional
public class ProjectMessageManageController extends XbootBaseController<ProjectMessageManage, String> {

    @Autowired
    private ProjectMessageManageService projectMessageManageService;

    @Override
    public ProjectMessageManageService getService() {
        return projectMessageManageService;
    }


    @RequestMapping(value = "/getByCondition", method = RequestMethod.GET)
    @ApiOperation(value = "多条件分页获取")
    public Result<Page<ProjectMessageManage>> getByCondition(ProjectMessageManage projectMessageManage, SearchVo searchVo, PageVo pageVo) {

        Page<ProjectMessageManage> page = projectMessageManageService.findByCondition(projectMessageManage, searchVo, PageUtil.initPage(pageVo));
        return new ResultUtil<Page<ProjectMessageManage>>().setData(page);
    }

}
