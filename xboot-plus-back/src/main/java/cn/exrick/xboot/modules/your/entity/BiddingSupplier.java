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
@Table(name = "t_bidding_supplier")
@TableName("t_bidding_supplier")
@ApiModel(value = "投标供应商")
public class BiddingSupplier extends XbootBaseEntity {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "供应商名称")
    private String gysmc;

    @ApiModelProperty(value = "供应商地址")
    private String gysdz;

    @ApiModelProperty(value = "供应商负责人")
    private String gysfzr;

    @ApiModelProperty(value = "联系电话")
    private String lxdh;

    @JsonFormat(timezone = "GMT+8", pattern = "yyyy-MM-dd HH:mm:ss")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @ApiModelProperty(value = "报名时间")
    private Date bmsj;

    @JsonFormat(timezone = "GMT+8", pattern = "yyyy-MM-dd HH:mm:ss")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @ApiModelProperty(value = "投标时间")
    private Date tbsj;

    @ApiModelProperty(value = "投标代表人")
    private String tbdbr;

    @ApiModelProperty(value = "投标金额")
    private Double zbje;

    @ApiModelProperty(value = "投标文件")
    private String tbwj;
}