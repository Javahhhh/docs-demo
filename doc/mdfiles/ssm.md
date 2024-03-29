
springboot层:

entity层，controller层，service层，mapper层=dao层，

**流程为：Controller层调用Service层的方法，Service层调用mapper层中的方法，其中调用的参数是使用Entity层进行传递的。**

service层=service接口+servicelmpl实现类



Mybatis练习题：https://blog.51cto.com/u_15680317/6248550

MyBatis使用篇（三）：https://blog.csdn.net/weixin_36378917/article/details/84978388

# SSM-CRUD0.1版本

Mybatis单表的CRUD：https://blog.csdn.net/m0_62906683/article/details/134227967

准备工作：

1.准备数据库数据---准备一张名为 `user` 的表

2.[实体类](https://so.csdn.net/so/search?q=实体类&spm=1001.2101.3001.7020)准备--创建*entity*层，与数据库中的属性值基本保持一致

3.[Mapper](https://so.csdn.net/so/search?q=Mapper&spm=1001.2101.3001.7020)接口定义

## 查询：



### controller层：

使用插件有：PageHelper分页插件

用注解@RequestMapping，方法获取全部数据 

调用service层



### **S**ervice层



调用mapper层





# MyBatis：

## 相关概念：

***XML标签，动态 SQL=XML 映射器***

答案：以SqlSessionFactory 的实例为核心的

核心是不变的，怎么实现CRUD？

猜想1：使用标签化语言（xml标签），里面放SQL语句，html的样子

长什么样：

```
<configuration>
  <environments default="development">
    <environment id="development">
      <transactionManager type="JDBC"/>
      <dataSource type="POOLED">
      
        <property name="driver" value="${driver}"/>
        <property name="url" value="${url}"/>
        <property name="username" value="${username}"/>
        <property name="password" value="${password}"/>
        
      </dataSource>
    </environment>
  </environments>
  <mappers>
    <mapper resource="org/mybatis/example/BlogMapper.xml"/>
  </mappers>
</configuration>
```

问题：



问题：核心是不变的，怎么实现CRUD？

答案：使用xml标签，人家叫：动态 SQL，标签里有许多属性（id）

```
//插入语句
<insert id="" parameterType="">
  insert into 表名 (属性1, 属性2, 属性3)
        values (#{id}, #{name}, #{pwd})
</insert>
```

```
<select id="" resultType="">
 select * from 数据库名.表名
</select>
```

```
<update id="" parameterType="">
  update 表名 set id =#{id},name=#{name},pwd=#{pwd} where id =#{id}
</update>
```

```
<delete id="" parameterType="">
 delete from 表名 where id = #{id}
</delete>
```

## 1.运行第一个mybatis程序

https://cloud.tencent.com/developer/article/1606971

下载插件：mybatisx

## CRUD:

### 查询操作：

```
<select id="getUserList" resultType="com.example.mybatisdemo01.kuls.pojo.User">
        select * from mybatis.user
 </select>
 //接口文件
 List<User> getUserList();
 @Test
    public void test(){
        //通过工具类拿到sqlsession
        SqlSession sqlSession = MybatisUtils.getSqlSession();
        //通过sqlSession拿到相应的mapper
        UserMapper mapper = sqlSession.getMapper(UserMapper.class);
        //通过mapper调用mapper中的方法
        List<User> userList = mapper.getUserList();
        for (User user : userList) {
            System.out.println(user);
        }
        sqlSession.close();
    }
```

问题：怎么插入数据到user表

答案：添加固定数据，user表

### 插入操作：

```
//xml文件添加
<insert id="insertUser" parameterType="com.example.mybatisdemo01.kuls.pojo.User">
        insert into user (id, name, pwd)
        values (#{id}, #{name}, #{pwd})
</insert>
//接口文件加
void insertUser(User user);
//启动测试函数加：
 @Test
    public void test(){
    	//
        User user01 = new User();
        user01.setId(4);
        user01.setName("John");
        user01.setPwd("password");
        //
        //通过工具类拿到sqlsession
        SqlSession sqlSession = MybatisUtils.getSqlSession();
        //通过sqlSession拿到相应的mapper
        UserMapper mapper = sqlSession.getMapper(UserMapper.class);
        //
        mapper.insertUser(user01);
        //
        //通过mapper调用mapper中的方法
        List<User> userList = mapper.getUserList();
        for (User user : userList) {
            System.out.println(user);
        }
        sqlSession.close();
    }

```

### 删除操作：

删除id=1

```
//xml文件里
<delete id="deleteUser" parameterType="com.example.mybatisdemo01.kuls.pojo.User">
        delete from user where id = #{id}
</delete>
//接口文件
int deleteUser(int id);
//启动测试函数加：
 @Test
    public void test(){
        //通过工具类拿到sqlsession
        SqlSession sqlSession = MybatisUtils.getSqlSession();
        //通过sqlSession拿到相应的mapper
        UserMapper mapper = sqlSession.getMapper(UserMapper.class);
        
        mapper.deleteUser(1);
        
        //通过mapper调用mapper中的方法
        List<User> userList = mapper.getUserList();
        for (User user : userList) {
            System.out.println(user);
        }
        sqlSession.close();
    }
```

### 更新操作：

```
 //xml文件里
 <update id="updateUser" parameterType="com.example.mybatisdemo01.kuls.pojo.User">
  update user set id =#{id},name=#{name},pwd=#{pwd} where id =#{id}
</update>
//接口文件
void updateUser(User user);
//启动测试函数加：
 @Test
    public void test(){
        User updateuser = new User();
        updateuser.setId(2);
        updateuser.setName("god");
        updateuser.setPwd("666");
        //通过工具类拿到sqlsession
        SqlSession sqlSession = MybatisUtils.getSqlSession();
        //通过sqlSession拿到相应的mapper
        UserMapper mapper = sqlSession.getMapper(UserMapper.class);
        
        mapper.updateUser(updateuser);
        
        //通过mapper调用mapper中的方法
        List<User> userList = mapper.getUserList();
        for (User user : userList) {
            System.out.println(user);
        }
        sqlSession.close();
    }
```

 







## 结果映射（resultMap）：



## 动态 SQL：

- if
- choose (when, otherwise)
- trim (where, set)
- foreach

## SQL类





# Spring ：

相关概念：IOC 容器，

重点知识：

## 概念：

### 1.Bean

Bean是理解为类的代言人，类、接口、组件等都可以为Bean。

接口MessageService和实现类MessageServiceImpl，定义（MessageServiceImpl）实现类为Bean。

bean与ioc容器的关系：被管理与管理，“桶管理豆子”

问：如何创建Bean?

答：1.调用工厂方法来创建。



### 2.反转控制（IoC）容器

ioc是一个接口，ioc管理bean，因为bean是对象

主要接口是BeanFactory和ApplicationContext（用的多）

作用：**负责创建和管理对象**

什么是反转控制？

答：助手是IOC容器，程序员控制助手，助手**负责创建和管理对象**，程序员要对象时叫它给

类比例子：假设你是一名厨师，需要用到各种食材来做饭。在传统的编程模式中，你需要自己去市场购买食材，处理食材，然后才能开始做饭。这个过程就像是你自己创建和管理对象。你有一个助手（代理人），他会帮你做这些事情。当你需要食材时，你只需要告诉助手你需要什么，助手就会去市场购买和处理好食材，然后给你。这样，你就可以专注于烹饪的过程，而无需关心食材的来源和处理。这个助手就是IOC容器，它负责创建和管理对象，你需要对象时，只需要从IOC容器中获取即可。

依赖注入（DI）是实现IOC**设计思想**的具体方式，助手的作用。

两个变体：基于构造器，基于setter的依赖注入

创建IOC容器



解耦：掰断莲藕，降低组件间的依赖关系

耦合：把莲藕合起来，提高依赖关系



### 3.AOP

面向切面：在目标对象切一刀，分开前和后

理解：某个行为 （方法）执行前后，提供帮助，完成一些事，充当帮手的角色。

"Aspect"（切面）作用：实现AOP



