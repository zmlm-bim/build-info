package cn.exrick.xboot.modules.your.service;

import cn.exrick.xboot.base.XbootBaseService;
import cn.exrick.xboot.modules.your.entity.ProjectInfo;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import cn.exrick.xboot.common.vo.SearchVo;

import java.util.List;

/**
 * 项目信息接口
 * @author cgb
 */
public interface ProjectInfoService extends XbootBaseService<ProjectInfo, String> {

    /**
    * 多条件分页获取
    * @param projectInfo
    * @param searchVo
    * @param pageable
    * @return
    */
    Page<ProjectInfo> findByCondition(ProjectInfo projectInfo, SearchVo searchVo, Pageable pageable);

}