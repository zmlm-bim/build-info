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
 * @author jj
 */
@Data
@Accessors(chain = true)
@Entity
@DynamicInsert
@DynamicUpdate
@Table(name = "t_tenders_message_manage")
@TableName("t_tenders_message_manage")
@ApiModel(value = "标段信息管理")
public class TendersMessageManage extends XbootBaseEntity {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "标段编号")
    private String bdbh;

    @ApiModelProperty(value = "标段名称")
    private String bdmc;

    @ApiModelProperty(value = "标段责任部门")
    private String bdzrbm;

    @ApiModelProperty(value = "标段责任人")
    private String bdfzr;

    @ApiModelProperty(value = "标段状态")
    private String bdzt;

    @ApiModelProperty(value = "标段计划工期")
    private String bdjhgq;

    @JsonFormat(timezone = "GMT+8", pattern = "yyyy-MM-dd HH:mm:ss")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @ApiModelProperty(value = "标段计划启动时间")
    private Date bdjhqdsj;

    @JsonFormat(timezone = "GMT+8", pattern = "yyyy-MM-dd HH:mm:ss")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @ApiModelProperty(value = "标段计划完成时间")
    private Date bdjhwcsj;

    @ApiModelProperty(value = "标段建设需求")
    private String bdjsxq;

    @ApiModelProperty(value = "标段建设需求文件")
    private String bdjsxqwj;

    @ApiModelProperty(value = "标段建设内容")
    private String bdjsnr;

    @ApiModelProperty(value = "标段建设目标")
    private String bdjsmb;

    @ApiModelProperty(value = "标段建设计划文件")
    private String bdjsjhwj;
}