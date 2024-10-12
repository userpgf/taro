import { View, Text, Button } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'
import { useState } from 'react'
import Card from '@/components/Card'


function Header() {
  return (
    <View>这是一个头部组件</View>
  )
}
function Content() {
  return (
    <View>这是一个内容组件</View>
  )
}
function Footer() {
  return (
    <View>这是一个底部组件</View>
  )
}

export default function Hooks() {
  useLoad(() => {
    console.log('Page loaded.')
  })

  //添加状态 useState[第一个参数是变量值，第二个参数是修改该变量的值函数]=useState(初始值)



  // const [name,setName]=useState("张三");

  // const [age,setAge]=useState(18)

  // const [arr,setArr]=useState<number[]>([1,2,3,4,5])

  // interface UserType{

  // }


  // function handleAddAge(){
  //   setAge(age+1)
  // }


  // function handleChangeArr(){

  // }


  // const [couter,setCouter]=useState(0)

  // const handleCouterClick =()=>{
  // for(let i=0;i<3;i++)
  // {
  //     setCouter(pre=>{
  //      console.log('上一次的值',pre);
  //      return pre+1;
  //     }
  //       )
  // }

  // }



  //   const [tabArr, setTabArr] = useState(["主题", "历史记录", "答疑库"])
  //   const [active, setActive] = useState(0)

  //   const data = () => {

  //     if (active === 0) {
  //       return <View>主题</View>
  //     }
  //     else if (active === 1) {
  //       return <View>历史记录</View>
  //     }
  //     else {
  //       return <View>答疑库</View>
  //     }
  //   }



  //   return (
  //     <View className='hooks'>

  //       <View className='tabs'>
  //         {
  //           tabArr.map((item, index) => {

  //             return (
  //               <View
  //                 className={active == index ? `tab-item tab-item-active` : `tab-item`}
  //                 onClick={() => {
  //                   setActive(index)
  //                 }}
  //                 key={index}
  //               >{item}</View>
  //             )
  //           })
  //         }

  //       </View>

  //       {/* <View>
  //   {data()}
  // </View> */}



  //     </View>
  return (
    <View className='hooks'>
      <Card />




    </View>

  )

}