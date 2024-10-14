import { View, Image } from '@tarojs/components'

import './index.scss'


interface CardProps {
    title?: string
    text?: string
    num?: number
    content?:any
    bol?: boolean
    array?:Array<number> 
    changeName:()=>void
    
}


export default function Card({ title ,num,bol,changeName,content,text} : CardProps) {
    return (
        <View className='card'>
            <View className='header'>
                <Image className='img' src="https://nodejs.cn/adimg/crmeb02.jpg" mode='widthFix'></Image>
            </View>
            <View className='name'>
                <View className='title'>
                    {title}
                </View>
                <View className='content'>
                    {content}
                </View>
                <View>
                    {text}
                </View>
                <View>
                    {num}
                </View>
                <View>
                    {bol}
                </View>
                <View>
                    
                </View>
            </View>

            <View className='footer' >
                <View className='btn-action' onClick={()=>changeName()}>确定</View>
                <View className='btn-action'>取消</View>
            </View>
        </View>

    )

}