<?php
/**
 * Created by PhpStorm.
 * User: 宏达
 * Date: 2017/11/24
 * Time: 16:15
 */

class often{
    public $db;
    function __construct(){
        $obj=new db();
        $this->db=$obj->mysql;//获取数据
    }
    function index(){
        include 'App/views/often.html';
    }
}