<template>
  <el-container>
    <el-main class="">
      <el-row
        :gutter="10"
        align="center"
        class="py-3"
      >
        <el-col
          v-for="exercise in exercises"
          :key="exercise.name"
          :sm="24"
          :md="12"
        >
          <el-card class="card exercise-card zoomIn">
            <router-link :to="exercise.regularPath">
              <div class="exercise-card-header">
                <div class="exercise-icon">
                  <i class="el-icon-folder" />
                </div>
                <div class="exercise-card--links">
                  <el-link
                    v-if="exercise.frontmatter.github"
                    :underline="false"
                    class="p-2"
                    :href="exercise.frontmatter.github"
                    target="_blank"
                  >
                    <GithubIcon />
                  </el-link>

                  <el-link
                    v-if="exercise.frontmatter.link"
                    :underline="false"
                    class="p-2"
                    :href="exercise.frontmatter.link"
                    target="_blank"
                  >
                    <LinkIcon />
                  </el-link>
                </div>
              </div>
              <div>
                <h4>{{ exercise.frontmatter.title || exercise.title }}</h4>
                <p class="exercise-description">
                  {{ exercise.frontmatter.description }}
                </p>
                <ul class="languages-list">
                  <li
                    v-for="lang in exercise.frontmatter.languages"
                    :key="lang"
                  >
                    {{ lang }}
                  </li>
                </ul>
              </div>
            </router-link>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import {
  GithubIcon,
  LinkIcon,
} from 'vue-feather-icons'

export default {
  components: {
    GithubIcon,
    LinkIcon,
  },
  computed: {
    exercises () {
      return this.$pagination._matchedPages
    },
  },
}
</script>

<style lang="stylus" scoped>
.el-container {
  max-width: 1100px;
  margin-right: auto !important;
  margin-left: auto !important;
  min-height: 80vh;

  .exercise-card.card {
    margin: .5rem;
    background: linear-gradient(45deg, darken($accentColor, 30%), darken($accentColor, 70%));
    color: lighten($accentColor, 80%);
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.3);
    transition: all 0.4s;

    a:hover {
      text-decoration: none;
    }

    &:hover {
      transform: scale(0.99);
      box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
    }

    .exercise-card--links a {
      color: $accentColor;

      &:hover {
        color: lighten($accentColor, 30%);
      }
    }

    .exercise-card-header {
      display: flex;
      margin-bottom: 1rem;
      justify-content: space-between;
      align-items: center;

      .exercise-icon {
        font-size: 3em;
        position: relative;
        top: 0.3rem;
        color: lighten($accentColor, 50%);
      }
    }

    p.exercise-description {
      color: lighten($accentColor, 60%);
      margin: 1.5rem auto;
    }

    .languages-list {
      list-style: none;
      display: flex;
      padding: 0;
      margin: 0;
      color: lighten($accentColor, 40%);
      font-family: monospace;

      li {
        padding: 0 5px;
      }
    }
  }
}
</style>
