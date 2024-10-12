import { View, Image } from '@tarojs/components'

import './index.scss'



export default function Card() {
    return (
        <View className='card'>
            <View className='header'>
                <Image className='img' src="https://nodejs.cn/adimg/crmeb02.jpg" mode='widthFix'></Image>
            </View>
            <View className='name'>
                <View className='title'>
                    Lorem
                </View>
                <View className='content'>
                    ipsum dolor sit amet consectetur adipisicing elit. Quae, dolorem! Fugit, at tempore mollitia quos beatae nostrum deleniti atque neque laudantium eum. Tenetur voluptate ullam in velit nulla accusamus ea.
                    Ab ex dolor, enim labore suscipit vitae ea dolorum illum harum modi assumenda autem veritatis, id quos facilis! Quis, quos sit accusantium natus commodi quisquam blanditiis atque obcaecati distinctio cum?
                    In adipisci sapiente iusto quaerat nihil dolore expedita, explicabo placeat, deleniti aliquam non eaque error impedit unde? Aliquam, nulla facilis beatae praesentium magnam deleniti vel fugiat laboriosam, sequi non obcaecati!
                </View>
            </View>

            <View className='footer' >
                <View className='btn-action'>SHARE</View>
                <View className='btn-action'>LEARN MORE</View>
            </View>
        </View>

    )

}