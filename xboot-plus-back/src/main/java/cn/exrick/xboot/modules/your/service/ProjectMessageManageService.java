package cn.exrick.xboot.modules.your.service;

import cn.exrick.xboot.base.XbootBaseService;
import cn.exrick.xboot.modules.your.entity.ProjectMessageManage;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import cn.exrick.xboot.common.vo.SearchVo;

import java.util.List;

/**
 * 项目信息管理接口
 * @author jj
 */
public interface ProjectMessageManageService extends XbootBaseService<ProjectMessageManage, String> {

    /**
    * 多条件分页获取
    * @param projectMessageManage
    * @param searchVo
    * @param pageable
    * @return
    */
    Page<ProjectMessageManage> findByCondition(ProjectMessageManage projectMessageManage, SearchVo searchVo, Pageable pageable);

}