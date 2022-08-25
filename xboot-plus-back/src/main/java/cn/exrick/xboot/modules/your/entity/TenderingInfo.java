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
@Table(name = "t_tendering_info")
@TableName("t_tendering_info")
@ApiModel(value = "招标信息管理")
public class TenderingInfo extends XbootBaseEntity {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "项目名称")
    private String xmmc;

    @ApiModelProperty(value = "项目分标号数")
    private Integer xmfbhs;

    @ApiModelProperty(value = "招标负责人")
    private String zbfzr;

    @ApiModelProperty(value = "招标方式")
    private String zbfs;

    @JsonFormat(timezone = "GMT+8", pattern = "yyyy-MM-dd HH:mm:ss")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @ApiModelProperty(value = "开始招标时间")
    private Date kszbsj;

    @JsonFormat(timezone = "GMT+8", pattern = "yyyy-MM-dd HH:mm:ss")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @ApiModelProperty(value = "结束招标时间")
    private Date jszbsj;

    @ApiModelProperty(value = "招标金额")
    private Double zbje;

    @ApiModelProperty(value = "招标代理机构")
    private String zbdljg;

    @ApiModelProperty(value = "代理机构负责人")
    private String dljgfzr;

}