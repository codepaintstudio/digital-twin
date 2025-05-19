<script setup>
import ProgressBar from '@/components/ProgressBar.vue'
import CartBoxone from '@/components/cartBoxone.vue'
import gaugeChart from '@/components/gaugeChart.vue'
import AeraButton from '@/components/AeraButton.vue'
import { colProps, textProps } from 'element-plus'
import BottomButton from '@/components/BottomButton.vue'
import ColumnButton from '@/components/ColumnButton.vue'
import SeclectBox from '@/components/SeclectBox.vue'
import cartBoxTowContent from '@/components/cartBoxTowContent.vue'
import cartBoxOneCentent from '@/components/cartBoxOneCentent.vue'
import { 
  Demonstrationarea,
  AdvanceStartZone,
  WaterTownshipUnit,
  Ecologicalprotection,
  FarmlandHoldings ,
  BlueGgreenspace ,
  Widthgreen ,
  Coverage
} from '@/server/db'
import P18 from '@/assets/images/P18.svg'
import P19 from '@/assets/images/P19.svg'
import { PxToRem } from '@/utils/AutoRem'
const siteIcon = ref([P18, P19])
const CoverageIcon = ['../src/assets/images/P28.svg','../src/assets/images/P25.svg','../src/assets/images/P27.svg']
const colors = ['linear-gradient(90deg, #503e2a 0%, #cdba55 100%)', 'linear-gradient(90deg, #3d4a30 0%, #3fc894 100%)', 'linear-gradient(90deg, #1c3d2c 0%, #4ca5cd 100%)']
</script>
<template>
  <div class="main">
    <SeclectBox />
    <AeraButton />
    <BottomButton />
    <ColumnButton />
    <div class="banner">
      <div class="left">
        <div class="one">
          <div class="titles">
            <div class="test1">
              {{Demonstrationarea.title}}
            </div>
          </div>
          <div class="onebanner">
            <CartBoxone :width="'70.8rem'" :height="'24.299rem'" :title="Demonstrationarea.data.Targeting.title">
              <textTitle :data="Demonstrationarea.data.Targeting"></textTitle>
            </CartBoxone>
            <CartBoxone :width="'49.7rem'" :height="'24.299rem'" :title="Demonstrationarea.data.Special.title">
              <titleList :list="Demonstrationarea.data.Special.data"></titleList>
            </CartBoxone>
            <CartBoxtow :width="'39.999rem'" :height="'23.8999rem'">
              <CircleChart :showPercentage="false" :centerValue="Demonstrationarea.data.ecologicalData.total" :showLegend="true" :legend="'right'"
                centerLabel="数据数据" :dataItems="Demonstrationarea.data.ecologicalData.data" :width="'39.999rem'" :height="'23.8999rem'"
                :roseType="'pie'" :radius="['50%', '80%']" :isCircle="false" :center="['30%', '50%']" :titleLeft="'23%'" :LabelRight="'5%'"/>
            </CartBoxtow>
            <CartBoxtow :width="'39.999rem'" :height="'23.8999rem'">
              <ProgressAll :width="'34.78016rem'" :height="'23.8999rem'" :colors="colors" :data="Demonstrationarea.data.ProportionUse">
              </ProgressAll>
            </CartBoxtow>
            <CartBoxtow :width="'39.999rem'" :height="'23.8999rem'">
              <ecologyTitle :width="'39.999rem'" :height="'23.8999rem'" :data="Demonstrationarea.data.structure"></ecologyTitle>
            </CartBoxtow>
          </div>
        </div>
        <div class="two">
          <div class="titles">
            <div class="test1">
              {{AdvanceStartZone.title}}
            </div>
          </div>
          <div class="towbanner">
            <CartBoxone :width="'39.799rem'" :height="'24.20064rem'" :title="AdvanceStartZone.population.title">
              <CircleChart :centerValue="AdvanceStartZone.population.ecologicalData.total" :showLegend="false" :centerLabel="AdvanceStartZone.population.ecologicalData.title"
                :dataItems="AdvanceStartZone.population.ecologicalData.data" :width="'39.799rem'" :height="'24.20064rem'" :isCong="true" :radius="['45%','60%']" :radiusCong="['45%','65%']"/>
            </CartBoxone>
            <CartBoxone :width="'39.799rem'" :height="'24.20064rem'" :title="AdvanceStartZone.structure.title">
              <cartBoxOneCentent></cartBoxOneCentent>
            </CartBoxone>
            <CartBoxone :width="'39.799rem'" :height="'24.20064rem'" :title="AdvanceStartZone.site.title">
              <ProgressAll
                :data="AdvanceStartZone.site.data"
                :icon="siteIcon"
                :width="'39.799rem'"></ProgressAll>
            </CartBoxone>
          </div>
        </div>
        <div class="three">
          <div class="titles">
            <div class="test1">
              {{WaterTownshipUnit.title}}
            </div>
          </div>
          <div class="threebanner">
            <CartBoxtow v-for="i in WaterTownshipUnit.data" :width="'39.900vw'" :height="'16.571952rem'">
              <cartBoxTowContent :image="i.image" :text="i.text" :count="i.count"></cartBoxTowContent>
            </CartBoxtow>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="blist">
          <StructureButton />
        </div>
        <div class="carts">
          <CartBoxone :width="'60.5rem'" :height="'34.1rem'" :title="Ecologicalprotection.title">
            <CircleChart :centerValue="Ecologicalprotection.total" :showLabel="true" :centerLabel="Ecologicalprotection.centerTitle" :dataItems="Ecologicalprotection.data"
              :width="'55.3472rem'" :height="'32.3712rem'" :isCong="true" :center="['50%', '40%']" :titleTop="'30%'"/>
          </CartBoxone>
          <CartBoxone :width="'60.5rem'" :height="'34.1rem'" :title="FarmlandHoldings.title">
            <CircleChart :centerValue="FarmlandHoldings.total" :centerLabel="FarmlandHoldings.centerTitle" legend="right"
              :dataItems="FarmlandHoldings.data" :width="'55.3472rem'" :height="'32.3712rem'" :isCong="true" />
          </CartBoxone>
          <CartBoxone :width="'60.5rem'" :height="'34.1rem'" :title="BlueGgreenspace.title">
            <BarCharts :x-axis-data="BlueGgreenspace.data.xAxisdata" 
            :series-data="BlueGgreenspace.data.seriesdata" theme="dark" :horizontal="false" />
          </CartBoxone>
          <CartBoxone :width="'60.5rem'" :height="'34.1rem'">
            <gauges></gauges>
          </CartBoxone>
          <CartBoxone :width="'60.5rem'" :height="'34.1rem'" :title="Widthgreen.title">
            <BarCharts :x-axis-data="Widthgreen.data.xAxisdata" 
            :series-data="Widthgreen.data.seriesdata" theme="dark" :horizontal="false" />
          </CartBoxone>
          <CartBoxtow :width="'60.5rem'" :height="'34.1rem'">
            <ProgressAll :isMax="true" :progwidth="' 39.88rem'"
              :icon="CoverageIcon"
              :data="Coverage.data">
            </ProgressAll>
          </CartBoxtow>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.location-conditions {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.circle {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* .header {
  width: 100vw;
  height: 10.0694vh;
  border-radius: 0 0 0 0;
  opacity: 1;
  background: var(--header-brackground);
  margin-bottom: 1.7361vh;
} */

.main {
  width: 100%;
  height: 100%;
  padding: var(--content-padding);
}

.banner {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  font-family: 'SourceHanSansCN';

  .left {
    width: 145.2rem;
    height: 122.8rem;
    opacity: 1;
    align-items: start;

    .one {
      z-index: 1;
      width: 126.0rem;
      height: 60rem;
      border-radius: 1。15rem;
      opacity: 1;
      border: 0.1rem solid #2c3534;
      background: var(--backgrouend-tow);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      .titles {
        z-index: 2;
        width: 122.0rem;
        height: 10%;
        /* opacity: 1; */
        border-radius: 0.0977vw;
        border: 0.1rem solid #314347;
        background: linear-gradient(90deg, #2a5934 0%, #1e3033 100%);
        margin-top: 1rem;

        .test1 {
          width: 30.8rem;
          height: 100%;
          z-index: 100;
          color: #fff;
          font-size: 2.8rem;
          display: flex;
          align-items: center;
          margin-left: 3rem;
        }
      }

      .onebanner {
        width: 122.0rem;
        height: 85%;
        /* background-color: #fff; */
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: space-around;
      }
    }

    .two {
      width: 125.8rem;
      height: 34.89994rem;
      border-radius: 11.5px;
      opacity: 1;
      border: 1px solid #2c3535;
      background: var(--backgrouend-tow);
      margin-top: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: column;

      .titles {
        z-index: 2;
        width: 122.0rem;
        /* height: 10%; */
        height: 17%;
        /* opacity: 1; */
        border-radius: 0.5rem;
        border: 0.1rem solid #314347;
        background: linear-gradient(90deg, #2a5934 0%, #1e3033 100%);
        margin-top: 1.5rem;

        .test1 {
          width: 37rem;
          height: 100%;
          z-index: 100;
          color: #fff;
          font-size: 2.8rem;
          display: flex;
          align-items: center;
          margin-left: 3rem;
        }
      }

      .towbanner {
        width: 122.0rem;
        height: 85%;
        /* background-color: #fff; */
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: space-around;
      }
    }

    .three {
      width: 125.8rem;
      height: 25.49995rem;
      border-radius: 1.15rem;
      opacity: 1;
      border: 0.1rem solid #2c3534;
      background: var(--backgrouend-tow);
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      .titles {
        z-index: 2;
        width: 122.0rem;
        height: 22%;
        /* opacity: 1; */
        border-radius: 0.5rem;
        border: 1px solid #314347;
        background: linear-gradient(90deg, #2a5934 0%, #1e3033 100%);
        margin-top: 1.1rem;

        .test1 {
          width: 24.199rem;
          height: 100%;
          z-index: 100;
          color: #fff;
          font-size: 2.8rem;
          display: flex;
          align-items: center;
          margin-left: 3rem;
        }
      }

      .threebanner {
        width: 121.19rem;
        height: 70%;
        /* background-color: #fff; */
        display: flex;
        justify-content: space-around;
        align-content: center;
      }
    }
  }

  .right {
    width: 125.6rem;
    align-items: end;
    height: 123.000048rem;
    border-radius: 1.6rem;
    opacity: 1;
    border: 0.1rem solid #456655;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
    background: var(--backgrouend-tow);

    .blist {
      width: 98%;
      height: 12%;
      /* background: #1c3829d6; */
    }

    .carts {
      width: 100%;
      height: 85%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
    }
  }
}
</style>
