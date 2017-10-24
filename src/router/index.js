import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index/index'
import unit from '@/pages/unit/unit'
import geography from '@/pages/geography/geography'
import planning from '@/pages/planning/planning'
import survey from '@/pages/survey/survey'
import school from '@/pages/school/school'
import mating from '@/pages/mating/mating'
import enter from '@/pages/enter/enter'
import subSchool from '@/pages/subSchool/subSchool'
import nextFool from '@/pages/nextFool/nextFool'
import education from '@/pages/education/education'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '1-0',
      component: index
    },
    {
      path: '/unit',
      name: '1-1',
      component: unit
    },
    {
      path: '/geography',
      name: '1-2',
      component: geography
    },
    {
      path: '/planning',
      name: '1-3',
      component: planning
    },
    {
      path: '/survey',
      name: '1-4',
      component: survey
    },
    {
      path: '/school',
      name: '1-6',
      component: school
    },
    {
      path: '/mating',
      name: '1-7',
      component: mating
    },
    {
      path: '/enter',
      name: '1-5',
      component: enter
    },
    {
      path: '/subSchool/:id',
      name: '6-1',
      component: subSchool
    },
    {
      path: '/coi/:id',
      name: '4-1',
      component: nextFool
    },
    {
      path: '/education/:id',
      name: '7-1',
      component: education
    }
  ]
})
