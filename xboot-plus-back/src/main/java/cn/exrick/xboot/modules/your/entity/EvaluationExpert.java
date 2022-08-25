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
@Table(name = "t_evaluation_expert")
@TableName("t_evaluation_expert")
@ApiModel(value = "评标专家")
public class EvaluationExpert extends XbootBaseEntity {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "姓名")
    private String xm;

    @ApiModelProperty(value = "性别")
    private String xb;

    @ApiModelProperty(value = "联系电话")
    private String lxdh;

    @ApiModelProperty(value = "工作单位")
    private String gzdw;

    @ApiModelProperty(value = "学历")
    private String xl;

    @ApiModelProperty(value = "专业")
    private String zy;

    @ApiModelProperty(value = "职称")
    private String zc;

    @ApiModelProperty(value = "评标小组角色 0组长1组员")
    private Integer pbxzjs;

    @ApiModelProperty(value = "评分")
    private Double pf;
}