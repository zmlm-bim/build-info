package cn.exrick.xboot.modules.your.entity;

import cn.exrick.xboot.base.XbootBaseEntity;
import com.baomidou.mybatisplus.annotation.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.annotations.ApiModel;
import lombok.Data;
import lombok.experimental.Accessors;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;

/**
 * @author cgb
 */
@Data
@Accessors(chain = true)
@Entity
@DynamicInsert
@DynamicUpdate
@Table(name = "t_tendering_plan")
@TableName("t_tendering_plan")
@ApiModel(value = "招标计划")
public class TenderingPlan extends XbootBaseEntity {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "项目名称")
    private String xmmc;

    @ApiModelProperty(value = "项目分标号数")
    private Integer xmfbhs;

    @ApiModelProperty(value = "招标负责人")
    private String zbfzr;

    @ApiModelProperty(value = "所属部门")
    private String ssbm;

    @JsonFormat(timezone = "GMT+8", pattern = "yyyy-MM-dd HH:mm:ss")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @ApiModelProperty(value = "计划招标时间")
    private Date jhzbsj;

    @ApiModelProperty(value = "计划招标方式")
    private String jhzbfs;

    @ApiModelProperty(value = "计划招标预算")
    private Double jhzbys;

    @ApiModelProperty(value = "项目阶段 1设计 2施工 3监理")
    private Integer xmjd;

    @ApiModelProperty(value = "招标状态 1招标中 2招标结束 3未招标")
    private Integer zbzt;

}