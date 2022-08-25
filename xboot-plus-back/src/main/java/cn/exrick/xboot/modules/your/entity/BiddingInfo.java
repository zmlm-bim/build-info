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
@Table(name = "t_bidding_info")
@TableName("t_bidding_info")
@ApiModel(value = "投标信息")
public class BiddingInfo extends XbootBaseEntity {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "项目标段名称")
    private String xmbdmc;

    @ApiModelProperty(value = "分标号")
    private Integer fbh;

    @ApiModelProperty(value = "标段负责人")
    private String bdfzr;

    @ApiModelProperty(value = "招标代理机构")
    private String zbdljg;

    @JsonFormat(timezone = "GMT+8", pattern = "yyyy-MM-dd HH:mm:ss")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @ApiModelProperty(value = "招标时间")
    private Date zbsj;

    @JsonFormat(timezone = "GMT+8", pattern = "yyyy-MM-dd HH:mm:ss")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @ApiModelProperty(value = "投标时间")
    private Date tbsj;

    @ApiModelProperty(value = "报名数量")
    private Integer bmsl;

    @ApiModelProperty(value = "中标供应商")
    private String zbgys;

    @ApiModelProperty(value = "中标金额")
    private Double zbje;

}