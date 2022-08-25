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
@Table(name = "t_project_message_manage")
@TableName("t_project_message_manage")
@ApiModel(value = "项目信息管理")
public class ProjectMessageManage extends XbootBaseEntity {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "项目编号")
    private String xmbh;

    @ApiModelProperty(value = "项目名称")
    private String xmmc;

    @ApiModelProperty(value = "项目牵头部门")
    private String xmqtbm;

    @ApiModelProperty(value = "项目总负责人")
    private String xmzfzr;

    @JsonFormat(timezone = "GMT+8", pattern = "yyyy-MM-dd HH:mm:ss")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @ApiModelProperty(value = "项目立项时间")
    private Date xmlxsj;

    @ApiModelProperty(value = "项目总工期")
    private String xmzgq;

    @ApiModelProperty(value = "咨询公司名称")
    private String zxgsmc;

    @ApiModelProperty(value = "咨询负责人")
    private String zxfzr;

    @ApiModelProperty(value = "项目期数")
    private String xmqs;

    @ApiModelProperty(value = "项目建设需求")
    private String xmjsxq;

    @ApiModelProperty(value = "项目建设需求文件")
    private String xmjsxqwj;

    @ApiModelProperty(value = "项目建设内容")
    private String xmjsnr;

    @ApiModelProperty(value = "项目建设目标")
    private String xmjsmb;

    @ApiModelProperty(value = "项目立项文件")
    private String xmlxwj;
}