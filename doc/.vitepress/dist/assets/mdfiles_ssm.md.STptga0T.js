import{_ as s,c as a,o as n,aR as p}from"./chunks/framework.CBKdeDO1.js";const g=JSON.parse('{"title":"SSM-CRUD0.1版本","description":"","frontmatter":{},"headers":[],"relativePath":"mdfiles/ssm.md","filePath":"mdfiles/ssm.md"}'),e={name:"mdfiles/ssm.md"},l=p(`<p>springboot层:</p><p>entity层，controller层，service层，mapper层=dao层，</p><p><strong>流程为：Controller层调用Service层的方法，Service层调用mapper层中的方法，其中调用的参数是使用Entity层进行传递的。</strong></p><p>service层=service接口+servicelmpl实现类</p><p>Mybatis练习题：<a href="https://blog.51cto.com/u_15680317/6248550" target="_blank" rel="noreferrer">https://blog.51cto.com/u_15680317/6248550</a></p><p>MyBatis使用篇（三）：<a href="https://blog.csdn.net/weixin_36378917/article/details/84978388" target="_blank" rel="noreferrer">https://blog.csdn.net/weixin_36378917/article/details/84978388</a></p><h1 id="ssm-crud0-1版本" tabindex="-1">SSM-CRUD0.1版本 <a class="header-anchor" href="#ssm-crud0-1版本" aria-label="Permalink to &quot;SSM-CRUD0.1版本&quot;">​</a></h1><p>Mybatis单表的CRUD：<a href="https://blog.csdn.net/m0_62906683/article/details/134227967" target="_blank" rel="noreferrer">https://blog.csdn.net/m0_62906683/article/details/134227967</a></p><p>准备工作：</p><p>1.准备数据库数据---准备一张名为 <code>user</code> 的表</p><p>2.<a href="https://so.csdn.net/so/search?q=%E5%AE%9E%E4%BD%93%E7%B1%BB&amp;spm=1001.2101.3001.7020" target="_blank" rel="noreferrer">实体类</a>准备--创建<em>entity</em>层，与数据库中的属性值基本保持一致</p><p>3.<a href="https://so.csdn.net/so/search?q=Mapper&amp;spm=1001.2101.3001.7020" target="_blank" rel="noreferrer">Mapper</a>接口定义</p><h2 id="查询" tabindex="-1">查询： <a class="header-anchor" href="#查询" aria-label="Permalink to &quot;查询：&quot;">​</a></h2><h3 id="controller层" tabindex="-1">controller层： <a class="header-anchor" href="#controller层" aria-label="Permalink to &quot;controller层：&quot;">​</a></h3><p>使用插件有：PageHelper分页插件</p><p>用注解@RequestMapping，方法获取全部数据</p><p>调用service层</p><h3 id="service层" tabindex="-1"><strong>S</strong>ervice层 <a class="header-anchor" href="#service层" aria-label="Permalink to &quot;**S**ervice层&quot;">​</a></h3><p>调用mapper层</p><h1 id="mybatis" tabindex="-1">MyBatis： <a class="header-anchor" href="#mybatis" aria-label="Permalink to &quot;MyBatis：&quot;">​</a></h1><h2 id="相关概念" tabindex="-1">相关概念： <a class="header-anchor" href="#相关概念" aria-label="Permalink to &quot;相关概念：&quot;">​</a></h2><p><em><strong>XML标签，动态 SQL=XML 映射器</strong></em></p><p>答案：以SqlSessionFactory 的实例为核心的</p><p>核心是不变的，怎么实现CRUD？</p><p>猜想1：使用标签化语言（xml标签），里面放SQL语句，html的样子</p><p>长什么样：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;configuration&gt;</span></span>
<span class="line"><span>  &lt;environments default=&quot;development&quot;&gt;</span></span>
<span class="line"><span>    &lt;environment id=&quot;development&quot;&gt;</span></span>
<span class="line"><span>      &lt;transactionManager type=&quot;JDBC&quot;/&gt;</span></span>
<span class="line"><span>      &lt;dataSource type=&quot;POOLED&quot;&gt;</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>        &lt;property name=&quot;driver&quot; value=&quot;\${driver}&quot;/&gt;</span></span>
<span class="line"><span>        &lt;property name=&quot;url&quot; value=&quot;\${url}&quot;/&gt;</span></span>
<span class="line"><span>        &lt;property name=&quot;username&quot; value=&quot;\${username}&quot;/&gt;</span></span>
<span class="line"><span>        &lt;property name=&quot;password&quot; value=&quot;\${password}&quot;/&gt;</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>      &lt;/dataSource&gt;</span></span>
<span class="line"><span>    &lt;/environment&gt;</span></span>
<span class="line"><span>  &lt;/environments&gt;</span></span>
<span class="line"><span>  &lt;mappers&gt;</span></span>
<span class="line"><span>    &lt;mapper resource=&quot;org/mybatis/example/BlogMapper.xml&quot;/&gt;</span></span>
<span class="line"><span>  &lt;/mappers&gt;</span></span>
<span class="line"><span>&lt;/configuration&gt;</span></span></code></pre></div><p>问题：</p><p>问题：核心是不变的，怎么实现CRUD？</p><p>答案：使用xml标签，人家叫：动态 SQL，标签里有许多属性（id）</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//插入语句</span></span>
<span class="line"><span>&lt;insert id=&quot;&quot; parameterType=&quot;&quot;&gt;</span></span>
<span class="line"><span>  insert into 表名 (属性1, 属性2, 属性3)</span></span>
<span class="line"><span>        values (#{id}, #{name}, #{pwd})</span></span>
<span class="line"><span>&lt;/insert&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;select id=&quot;&quot; resultType=&quot;&quot;&gt;</span></span>
<span class="line"><span> select * from 数据库名.表名</span></span>
<span class="line"><span>&lt;/select&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;update id=&quot;&quot; parameterType=&quot;&quot;&gt;</span></span>
<span class="line"><span>  update 表名 set id =#{id},name=#{name},pwd=#{pwd} where id =#{id}</span></span>
<span class="line"><span>&lt;/update&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;delete id=&quot;&quot; parameterType=&quot;&quot;&gt;</span></span>
<span class="line"><span> delete from 表名 where id = #{id}</span></span>
<span class="line"><span>&lt;/delete&gt;</span></span></code></pre></div><h2 id="_1-运行第一个mybatis程序" tabindex="-1">1.运行第一个mybatis程序 <a class="header-anchor" href="#_1-运行第一个mybatis程序" aria-label="Permalink to &quot;1.运行第一个mybatis程序&quot;">​</a></h2><p><a href="https://cloud.tencent.com/developer/article/1606971" target="_blank" rel="noreferrer">https://cloud.tencent.com/developer/article/1606971</a></p><p>下载插件：mybatisx</p><h2 id="crud" tabindex="-1">CRUD: <a class="header-anchor" href="#crud" aria-label="Permalink to &quot;CRUD:&quot;">​</a></h2><h3 id="查询操作" tabindex="-1">查询操作： <a class="header-anchor" href="#查询操作" aria-label="Permalink to &quot;查询操作：&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;select id=&quot;getUserList&quot; resultType=&quot;com.example.mybatisdemo01.kuls.pojo.User&quot;&gt;</span></span>
<span class="line"><span>        select * from mybatis.user</span></span>
<span class="line"><span> &lt;/select&gt;</span></span>
<span class="line"><span> //接口文件</span></span>
<span class="line"><span> List&lt;User&gt; getUserList();</span></span>
<span class="line"><span> @Test</span></span>
<span class="line"><span>    public void test(){</span></span>
<span class="line"><span>        //通过工具类拿到sqlsession</span></span>
<span class="line"><span>        SqlSession sqlSession = MybatisUtils.getSqlSession();</span></span>
<span class="line"><span>        //通过sqlSession拿到相应的mapper</span></span>
<span class="line"><span>        UserMapper mapper = sqlSession.getMapper(UserMapper.class);</span></span>
<span class="line"><span>        //通过mapper调用mapper中的方法</span></span>
<span class="line"><span>        List&lt;User&gt; userList = mapper.getUserList();</span></span>
<span class="line"><span>        for (User user : userList) {</span></span>
<span class="line"><span>            System.out.println(user);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        sqlSession.close();</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>问题：怎么插入数据到user表</p><p>答案：添加固定数据，user表</p><h3 id="插入操作" tabindex="-1">插入操作： <a class="header-anchor" href="#插入操作" aria-label="Permalink to &quot;插入操作：&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//xml文件添加</span></span>
<span class="line"><span>&lt;insert id=&quot;insertUser&quot; parameterType=&quot;com.example.mybatisdemo01.kuls.pojo.User&quot;&gt;</span></span>
<span class="line"><span>        insert into user (id, name, pwd)</span></span>
<span class="line"><span>        values (#{id}, #{name}, #{pwd})</span></span>
<span class="line"><span>&lt;/insert&gt;</span></span>
<span class="line"><span>//接口文件加</span></span>
<span class="line"><span>void insertUser(User user);</span></span>
<span class="line"><span>//启动测试函数加：</span></span>
<span class="line"><span> @Test</span></span>
<span class="line"><span>    public void test(){</span></span>
<span class="line"><span>    	//</span></span>
<span class="line"><span>        User user01 = new User();</span></span>
<span class="line"><span>        user01.setId(4);</span></span>
<span class="line"><span>        user01.setName(&quot;John&quot;);</span></span>
<span class="line"><span>        user01.setPwd(&quot;password&quot;);</span></span>
<span class="line"><span>        //</span></span>
<span class="line"><span>        //通过工具类拿到sqlsession</span></span>
<span class="line"><span>        SqlSession sqlSession = MybatisUtils.getSqlSession();</span></span>
<span class="line"><span>        //通过sqlSession拿到相应的mapper</span></span>
<span class="line"><span>        UserMapper mapper = sqlSession.getMapper(UserMapper.class);</span></span>
<span class="line"><span>        //</span></span>
<span class="line"><span>        mapper.insertUser(user01);</span></span>
<span class="line"><span>        //</span></span>
<span class="line"><span>        //通过mapper调用mapper中的方法</span></span>
<span class="line"><span>        List&lt;User&gt; userList = mapper.getUserList();</span></span>
<span class="line"><span>        for (User user : userList) {</span></span>
<span class="line"><span>            System.out.println(user);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        sqlSession.close();</span></span>
<span class="line"><span>    }</span></span></code></pre></div><h3 id="删除操作" tabindex="-1">删除操作： <a class="header-anchor" href="#删除操作" aria-label="Permalink to &quot;删除操作：&quot;">​</a></h3><p>删除id=1</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//xml文件里</span></span>
<span class="line"><span>&lt;delete id=&quot;deleteUser&quot; parameterType=&quot;com.example.mybatisdemo01.kuls.pojo.User&quot;&gt;</span></span>
<span class="line"><span>        delete from user where id = #{id}</span></span>
<span class="line"><span>&lt;/delete&gt;</span></span>
<span class="line"><span>//接口文件</span></span>
<span class="line"><span>int deleteUser(int id);</span></span>
<span class="line"><span>//启动测试函数加：</span></span>
<span class="line"><span> @Test</span></span>
<span class="line"><span>    public void test(){</span></span>
<span class="line"><span>        //通过工具类拿到sqlsession</span></span>
<span class="line"><span>        SqlSession sqlSession = MybatisUtils.getSqlSession();</span></span>
<span class="line"><span>        //通过sqlSession拿到相应的mapper</span></span>
<span class="line"><span>        UserMapper mapper = sqlSession.getMapper(UserMapper.class);</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        mapper.deleteUser(1);</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        //通过mapper调用mapper中的方法</span></span>
<span class="line"><span>        List&lt;User&gt; userList = mapper.getUserList();</span></span>
<span class="line"><span>        for (User user : userList) {</span></span>
<span class="line"><span>            System.out.println(user);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        sqlSession.close();</span></span>
<span class="line"><span>    }</span></span></code></pre></div><h3 id="更新操作" tabindex="-1">更新操作： <a class="header-anchor" href="#更新操作" aria-label="Permalink to &quot;更新操作：&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span> //xml文件里</span></span>
<span class="line"><span> &lt;update id=&quot;updateUser&quot; parameterType=&quot;com.example.mybatisdemo01.kuls.pojo.User&quot;&gt;</span></span>
<span class="line"><span>  update user set id =#{id},name=#{name},pwd=#{pwd} where id =#{id}</span></span>
<span class="line"><span>&lt;/update&gt;</span></span>
<span class="line"><span>//接口文件</span></span>
<span class="line"><span>void updateUser(User user);</span></span>
<span class="line"><span>//启动测试函数加：</span></span>
<span class="line"><span> @Test</span></span>
<span class="line"><span>    public void test(){</span></span>
<span class="line"><span>        User updateuser = new User();</span></span>
<span class="line"><span>        updateuser.setId(2);</span></span>
<span class="line"><span>        updateuser.setName(&quot;god&quot;);</span></span>
<span class="line"><span>        updateuser.setPwd(&quot;666&quot;);</span></span>
<span class="line"><span>        //通过工具类拿到sqlsession</span></span>
<span class="line"><span>        SqlSession sqlSession = MybatisUtils.getSqlSession();</span></span>
<span class="line"><span>        //通过sqlSession拿到相应的mapper</span></span>
<span class="line"><span>        UserMapper mapper = sqlSession.getMapper(UserMapper.class);</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        mapper.updateUser(updateuser);</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>        //通过mapper调用mapper中的方法</span></span>
<span class="line"><span>        List&lt;User&gt; userList = mapper.getUserList();</span></span>
<span class="line"><span>        for (User user : userList) {</span></span>
<span class="line"><span>            System.out.println(user);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        sqlSession.close();</span></span>
<span class="line"><span>    }</span></span></code></pre></div><h2 id="结果映射-resultmap" tabindex="-1">结果映射（resultMap）： <a class="header-anchor" href="#结果映射-resultmap" aria-label="Permalink to &quot;结果映射（resultMap）：&quot;">​</a></h2><h2 id="动态-sql" tabindex="-1">动态 SQL： <a class="header-anchor" href="#动态-sql" aria-label="Permalink to &quot;动态 SQL：&quot;">​</a></h2><ul><li>if</li><li>choose (when, otherwise)</li><li>trim (where, set)</li><li>foreach</li></ul><h2 id="sql类" tabindex="-1">SQL类 <a class="header-anchor" href="#sql类" aria-label="Permalink to &quot;SQL类&quot;">​</a></h2><h1 id="spring" tabindex="-1">Spring ： <a class="header-anchor" href="#spring" aria-label="Permalink to &quot;Spring ：&quot;">​</a></h1><p>相关概念：IOC 容器，</p><p>重点知识：</p><h2 id="概念" tabindex="-1">概念： <a class="header-anchor" href="#概念" aria-label="Permalink to &quot;概念：&quot;">​</a></h2><h3 id="_1-bean" tabindex="-1">1.Bean <a class="header-anchor" href="#_1-bean" aria-label="Permalink to &quot;1.Bean&quot;">​</a></h3><p>Bean是理解为类的代言人，类、接口、组件等都可以为Bean。</p><p>接口MessageService和实现类MessageServiceImpl，定义（MessageServiceImpl）实现类为Bean。</p><p>bean与ioc容器的关系：被管理与管理，“桶管理豆子”</p><p>问：如何创建Bean?</p><p>答：1.调用工厂方法来创建。</p><h3 id="_2-反转控制-ioc-容器" tabindex="-1">2.反转控制（IoC）容器 <a class="header-anchor" href="#_2-反转控制-ioc-容器" aria-label="Permalink to &quot;2.反转控制（IoC）容器&quot;">​</a></h3><p>ioc是一个接口，ioc管理bean，因为bean是对象</p><p>主要接口是BeanFactory和ApplicationContext（用的多）</p><p>作用：<strong>负责创建和管理对象</strong></p><p>什么是反转控制？</p><p>答：助手是IOC容器，程序员控制助手，助手<strong>负责创建和管理对象</strong>，程序员要对象时叫它给</p><p>类比例子：假设你是一名厨师，需要用到各种食材来做饭。在传统的编程模式中，你需要自己去市场购买食材，处理食材，然后才能开始做饭。这个过程就像是你自己创建和管理对象。你有一个助手（代理人），他会帮你做这些事情。当你需要食材时，你只需要告诉助手你需要什么，助手就会去市场购买和处理好食材，然后给你。这样，你就可以专注于烹饪的过程，而无需关心食材的来源和处理。这个助手就是IOC容器，它负责创建和管理对象，你需要对象时，只需要从IOC容器中获取即可。</p><p>依赖注入（DI）是实现IOC<strong>设计思想</strong>的具体方式，助手的作用。</p><p>两个变体：基于构造器，基于setter的依赖注入</p><p>创建IOC容器</p><p>解耦：掰断莲藕，降低组件间的依赖关系</p><p>耦合：把莲藕合起来，提高依赖关系</p><h3 id="_3-aop" tabindex="-1">3.AOP <a class="header-anchor" href="#_3-aop" aria-label="Permalink to &quot;3.AOP&quot;">​</a></h3><p>面向切面：在目标对象切一刀，分开前和后</p><p>理解：某个行为 （方法）执行前后，提供帮助，完成一些事，充当帮手的角色。</p><p>&quot;Aspect&quot;（切面）作用：实现AOP</p>`,79),t=[l];function i(r,o,c,u,d,h){return n(),a("div",null,t)}const q=s(e,[["render",i]]);export{g as __pageData,q as default};
