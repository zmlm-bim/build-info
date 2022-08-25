package cn.exrick.xboot.modules.your.serviceimpl;

import cn.exrick.xboot.modules.your.dao.BiddingSupplierDao;
import cn.exrick.xboot.modules.your.entity.BiddingSupplier;
import cn.exrick.xboot.modules.your.service.BiddingSupplierService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import cn.exrick.xboot.common.vo.SearchVo;
import cn.hutool.core.date.DateUtil;
import cn.hutool.core.util.StrUtil;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.lang.Nullable;

import java.util.List;
import javax.persistence.criteria.*;
import java.util.ArrayList;
import java.util.Date;

/**
 * 投标供应商接口实现
 * @author cgb
 */
@Slf4j
@Service
@Transactional
public class BiddingSupplierServiceImpl implements BiddingSupplierService {

    @Autowired
    private BiddingSupplierDao biddingSupplierDao;

    @Override
    public BiddingSupplierDao getRepository() {
        return biddingSupplierDao;
    }

    @Override
    public Page<BiddingSupplier> findByCondition(BiddingSupplier biddingSupplier, SearchVo searchVo, Pageable pageable) {

        return biddingSupplierDao.findAll(new Specification<BiddingSupplier>() {
            @Nullable
            @Override
            public Predicate toPredicate(Root<BiddingSupplier> root, CriteriaQuery<?> cq, CriteriaBuilder cb) {

                // TODO 可添加你的其他搜索过滤条件 默认已有创建时间过滤
                Path<Date> createTimeField = root.get("createTime");

                List<Predicate> list = new ArrayList<>();

                // 创建时间
                if(StrUtil.isNotBlank(searchVo.getStartDate())&&StrUtil.isNotBlank(searchVo.getEndDate())){
                    Date start = DateUtil.parse(searchVo.getStartDate());
                    Date end = DateUtil.parse(searchVo.getEndDate());
                    list.add(cb.between(createTimeField, start, DateUtil.endOfDay(end)));
                }

                Predicate[] arr = new Predicate[list.size()];
                cq.where(list.toArray(arr));
                return null;
            }
        }, pageable);
    }

}