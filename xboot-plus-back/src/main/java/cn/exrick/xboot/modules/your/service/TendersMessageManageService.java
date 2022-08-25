package cn.exrick.xboot.modules.your.service;

import cn.exrick.xboot.base.XbootBaseService;
import cn.exrick.xboot.modules.your.entity.TendersMessageManage;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import cn.exrick.xboot.common.vo.SearchVo;

import java.util.List;

/**
 * 标段信息管理接口
 * @author jj
 */
public interface TendersMessageManageService extends XbootBaseService<TendersMessageManage, String> {

    /**
    * 多条件分页获取
    * @param tendersMessageManage
    * @param searchVo
    * @param pageable
    * @return
    */
    Page<TendersMessageManage> findByCondition(TendersMessageManage tendersMessageManage, SearchVo searchVo, Pageable pageable);

}