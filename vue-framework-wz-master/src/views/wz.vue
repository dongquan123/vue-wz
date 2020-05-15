<template>
  <div class="animated fadeIn">
     <Row>
             <Col span="24" >
           
           <div style="" class="doc-header">



                       <Form :label-width="80" inline>
        <Form-item label="订单编号:">
            <Input placeholder="请输入订单编号"></Input>
        </Form-item>
                <Form-item label="商品名称:">
            <Input placeholder="请输入商品名称"></Input>
        </Form-item>
         <Form-item label="订单状态" >
<select class="selectClass">
  <option value ="">请选择</option>
  <option value ="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>
        </Form-item>
         <Form-item label="下单时间">
                    <Date-picker type="date" placeholder="选择日期"></Date-picker>~
                    <Time-picker type="time" placeholder="选择时间" ></Time-picker>
        </Form-item>                   
                    <Form-item>
                         <Button type="ghost" shape="circle" icon="ios-search">搜索</Button>
                    </Form-item>
                </Form>

            </div>
            <div style="" class="doc-content">
                <h5>行内表单</h5>
        <p>设置属性 inline，表单元素可以水平排列。</p>

            </div>
        </Col>

    </Row>
    <Row >
      <Col :sm="24" :md="24" :lg="12">

        <h3>框架在手，天下我有</h3>
        <p>好用的框架决定了一个程序员的效率</p>
  <Table :columns="columns1" :data="data1">

  </Table>
<Page :total="dataCount" :page-size="pageSize" show-total @on-change="changepage"></Page>

      </Col>
    </Row>
    
  </div>
</template>


   
<script>
import { apiAddress } from '@/require/api';//导入接口
export default {
        data () {
            return {
            dataCount:"", // 总数据的条目
            pageSize:10,     // 每页显示多少条
            data1: [],
            list:[],
               columns1: [
                    {
                        title: '姓名',
                        key: 'userName'
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '地址',
                        key: 'password'
                    },                                     
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '查看'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除')
                            ]);
                        },

                    }
                ],

            }
        },
      
          created() {
    this.onLoad(); //
  }, 
             methods: {
            show (index) {
                this.$Modal.info({
                    title: '用户信息',
                    content: `姓名：${this.data1[index].name}<br>年龄：${this.data1[index].age}<br>地址：${this.data1[index].address}`
                })
            },
            remove (index) {
                this.data1.splice(index, 1);
            },
              onLoad() {
           apiAddress({                       
          }).then(res => {
              this.list = res.body.Userlist
                this.dataCount = res.body.Userlist.length; //接口返回数据的总条目数
                        if(this.dataCount < this.pageSize){   //如果数据的总条目数小于每页显示的条目数就赋值，否则就提取总数据的第三条
                        this.data1 = res.body.Userlist
                        }else{
                            this.data1 = res.body.Userlist.slice(0,this.pageSize);
                        }           
            })           
       },
                changepage(index){
                let _start = ( index - 1 ) * this.pageSize;
                let _end = index * this.pageSize;
                this.data1 = this.list.slice(_start, _end);
            }
  
        },

      }
</script>
<style>
.selectClass{
display: inline-block;
    width: 240px;
    height: 32px;
    line-height: 1.5;
    padding: 4px 7px;
    font-size: 12px;
    border: 1px solid #dddee1;
    border-radius: 4px;
    color: #495060;
    background-color: #fff;
    background-image: none;
    position: relative;
    cursor: pointer;
    -webkit-transition: border .2s ease-in-out,background .2s ease-in-out,-webkit-box-shadow .2s ease-in-out;
    transition: border .2s ease-in-out,background .2s ease-in-out,-webkit-box-shadow .2s ease-in-out;
    transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out;
    transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out,-webkit-box-shadow .2s ease-in-out;
}
</style>
