<template lang="pug">
  div(
    class="room-amentities"
    v-if="roomAmentities['Breakfast']"
  )
    div(class="amentity")
      div(class="amentity-img")
        Breakfast
      span 早餐
    div(
      class="amentity"
      v-if="roomAmentities['Mini-Bar']"
    )
      div(class="amentity-img")
        PoolsideBar
      span Mini Bar
    div(
      class="amentity"
      v-if="roomAmentities['Room-Service']"
    )
      div(class="amentity-img")
        RoomeService
      span Room Service
    div(
      class="amentity"
      v-if="roomAmentities['Wi-Fi']" 
    )
      div(class="amentity-img")
        Wifi
      span Wifi
    div(
      class="amentity"
      v-if="roomAmentities['Child-Friendly']"
    )
      div(class="amentity-img")
        Children
      span 適合兒童
    div(
      class="amentity"
      v-if="roomAmentities['Television']"
    )
      div(class="amentity-img")
        Telephone
      span 電話
    div(
      class="amentity"
      v-if="roomAmentities['Great-View']"
    )
      div(class="amentity-img")
        Views
      span 漂亮的視野
    div(
      class="amentity"
      v-if="roomAmentities['Refrigerator']"
    )
      div(class="amentity-img")
        Refrigerator
      span 冰箱
    div(
      class="amentity"
      v-if="roomAmentities['Sofa']"
    )
      div(class="amentity-img")
        Sofa 
      span 沙發
    div(
      class="amentity"
      v-if="roomAmentities['Pet-Friendly']"
    )
      div(class="amentity-img")
        Pets 
      span 攜帶寵物
    div(
      class="amentity"
      v-if="roomAmentities['Smoke-Free']"
    )
      div(class="amentity-img")
        NoSmoke
      span 全面禁菸
    div(
      class="amentity"
      v-if="roomAmentities['Air-Conditioner']"
    )
      div(class="amentity-img")
        AirShift
      span 空調
</template>

<script>
// plugin
import { mapActions, mapGetters } from "vuex";

// components

// views


// assets
import Breakfast from '@/assets/img/amenities/breakfast.svg'
import PoolsideBar from '@/assets/img/amenities/poolside_bar.svg'
import RoomeService from '@/assets/img/amenities/room-service.svg'
import Wifi from '@/assets/img/amenities/wifi.svg'
import Children from '@/assets/img/amenities/children.svg'
import Telephone from '@/assets/img/amenities/telephone.svg'
import Views from '@/assets/img/amenities/views.svg'
import Refrigerator from '@/assets/img/amenities/refrigerator.svg'
import Sofa from '@/assets/img/amenities/sofa.svg'
import Pets from '@/assets/img/amenities/pets.svg'
import NoSmoke from '@/assets/img/amenities/no-smoke.svg'
import AirShift from '@/assets/img/amenities/air-shift.svg'
import CancelButton from '@/components/base/CancelButton.vue'
import OKButton from '@/components/base/OKButton.vue'

export default {
  props: {
    roomAmentities: {
      type: Object,
      required: true
    }
  },
  data() {
    return {

    }
  },
  methods: {
    ...mapActions({

    })
  },
  computed: {
    ...mapGetters({

    })
  },
  components: {
    Breakfast,
    PoolsideBar ,
    RoomeService,
    Wifi,
    Children,
    Telephone,
    Views,
    Refrigerator,
    Sofa,
    Pets,
    NoSmoke, 
    AirShift,
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
  .room-amentities {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
  }
  .amentity {
    position: relative;
    flex: 0 1 85px;
    margin-right: 2%;
    margin-bottom: 10px;
    .amentity-img {
      height: 40px;
    }
    span {
      font-size: 12px;
    }
  }
  .no-provide {
    opacity: 0.2; 
  }
</style>