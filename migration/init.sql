use `test`;

DROP TABLE IF EXISTS `carousel-item`;
CREATE TABLE `carousel-item` (
  `id`bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT '轮播图项目id',
  `carouselId` bigint(20) DEFAULT 0 NOT NULL  COMMENT '轮播图的id',
  `uuid` varchar(255) NOT NULL DEFAULT '' COMMENT '唯一uuid',
  `title` varchar(255) NOT NULL DEFAULT '' COMMENT '项目名称',
  `description` varchar(255) NOT NULL DEFAULT '' COMMENT '项目描述',
  `buttonText` varchar(255) NOT NULL DEFAULT '' COMMENT '按钮文案',
  `backgroundImageId` bigint(20) unsigned NOT NULL COMMENT '轮播图项目底图id',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uniq_uuid` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='轮播图项目表';


use `test`;

DROP TABLE IF EXISTS `carousel-image`;
CREATE TABLE `carousel-image` (
  `id`bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT '图片id',
  `link` varchar(255) NOT NULL DEFAULT '' COMMENT '图片链接',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='轮播图片表';