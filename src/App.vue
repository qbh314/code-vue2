<template>
  <div id="app">
    <div>
      <header id="header">
        <a id="logo" href="/">
          <img src="https://v2.cn.vuejs.org/images/logo.svg" alt="vue logo" />
          <span>Vue.js</span>
        </a>
      </header>
    </div>
    <div id="main" class="fix-sidebar">
      <div class="sidebar">
        <div class="sidebar-inner">
          <div class="list">
            <ul class="menu-root">
              <li v-for="item in routes" :key="item.name">
                <h3 :class="['nav-title']">
                  {{ item.name }}
                </h3>
                <nav-item :list="item.children"></nav-item>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="content guide with-sidebar index-guide">
        <router-view />
        <!-- <Extend></Extend> -->
      </div>
    </div>
  </div>
</template>

<script>
import NavItem from "@/components/nav-item.vue";
// import Extend from "@/views/global-api/extend";

export default {
  components: {
    NavItem,
    // Extend,
  },
  data() {
    return {
      list: [],
      routes: [],
    };
  },
  mounted: function () {
    let routes = [];
    const files = require.context("@/router", false, /\.js$/);
    files.keys().forEach((key) => {
      if (key === "./index.js") return;
      const defaultList = files(key).default;
      routes = routes.concat(defaultList);
    });
    this.$data.routes = routes;
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}

body {
  padding-top: 62px;
  font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  font-size: 1rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #304455;
  background-color: #fff;
}

h1,
h2,
h3,
h4,
strong {
  font-weight: 600;
  color: #273849;
}
</style>

<style lang="less" scoped>
#app {
  #header {
    position: fixed;
    top: 0;
    z-index: 20;
    padding: 10px 30px 10px 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
    background-color: #fff;
    transition: background-color 0.3s ease-in-out;

    #logo {
      display: inline-block;
      font-size: 1.5em;
      line-height: 40px;
      color: #273849;
      font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial,
        sans-serif;
      font-weight: 500;

      img {
        vertical-align: middle;
        margin-right: 6px;
        width: 40px;
        height: 40px;
      }
    }
  }

  #main {
    position: relative;
    z-index: 1;
    padding: 0 60px 30px;
    overflow-x: hidden;

    &.fix-sidebar {
      position: static;

      .sidebar {
        position: fixed;

        .list {
          .menu-root {
            .nav-title {
              margin-top: 18.7px;
              margin-bottom: 18.7px;
            }

            .nav-title.active {
              color: green;
            }
          }
        }
      }
    }
  }

  .sidebar {
    position: absolute;
    z-index: 10;
    top: 62px;
    left: 0;
    bottom: 0;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;

    &-inner {
      width: 260px;
      padding: 35px 0px 60px 20px;
    }

    ul {
      list-style-type: none;
      margin: 0;
      line-height: 1.5em;
    }

    li {
      margin-top: 0.5em;
    }
  }

  .content {
    position: relative;
    padding: 35px 0;
    max-width: 700px;
    margin: 0 auto;
    padding-left: 50px;
  }

  @media screen and (max-width: 1300px) {
    .content.with-sidebar {
      margin-left: 290px;
    }
  }
}
</style>
