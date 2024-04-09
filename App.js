import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, Button, ScrollView } from 'react-native';
import tw from 'twrnc';

import "./assets/global.css";
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


export default function App() {
  return (
    <SafeAreaView style={tw`flex-1 p-1 pt-0`}>
      <ScrollView>

        <View style={[tw`bg-green-400 flex-3 rounded-bottom-3xl`, {
          borderBottomLeftRadius: 30, // Adjust the radius as needed
          borderBottomRightRadius: 20,
        }]}>
          <View style={tw`flex-1 flex-row justify-between p-6 pt-8`}>
            <Image
              source={{ uri: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' }}
              style={tw`w-12 h-12 rounded-full`}
            />
            <Ionicons name="notifications-outline" size={32} color="black" />

          </View>
          <View>
            <Text style={tw`text-2xl font-bold pl-8`}>Welcome Alexa</Text>
            <Text style={tw`pl-10`}>Have a nice day</Text>
          </View>

          <View style={tw`p-4`}>
            <View style={tw`flex-row items-center px-4 py-2 bg-gray-200 rounded-3xl`}>

              <TextInput
                placeholder="Search..."
                style={tw`flex-1 text-base`}
              />
              <Ionicons name="search" size={24} color="gray" style={tw`mr-2`} />
            </View>
          </View>
        </View>



        <View style={tw` flex-2 p-6`}>
          <View style={tw`bg-[#d9d9d9] flex-1 p-12 rounded-xl`}>
            <Text style={tw`text-md text-center font-bold`}>"QUOTE OF THE DAY"</Text>
          </View>


        </View>



        <View style={tw`flex-2`}>

          <View style={tw`p-2`}>
            <Text style={tw`text-md font-bold mr-8`}>Most common</Text>
          </View>
          <View style={tw`flex-row justify-around items-center gap-4 p-2`}>
            <View style={[tw`bg-[#d9d9d9] justify-center items-center flex-1 h-28 w-22 rounded-xl`, { elevation: 5 }]}>
              <Text style={tw`font-semibold`}>diabetes</Text>
            </View>
            <View style={[tw`bg-[#d9d9d9] justify-center items-center flex-1 h-28 w-22 rounded-xl`, { elevation: 5 }]}>
              <Text style={tw`font-semibold`}>Fiver</Text>
            </View>
            <View style={[tw`bg-[#d9d9d9] justify-center items-center flex-1 h-28 w-22 rounded-xl`, { elevation: 5 }]}>
              <Text style={tw`font-semibold`}>Cancer</Text>
            </View>


          </View>
        </View>



        <View style={tw`flex-2`}>
          <View style={tw`flex-row justify-between`}>
            <View style={tw`p-2`}>
              <Text style={tw`text-md font-bold mr-8`}>Most common</Text>
            </View>
            <View style={tw`p-2`}>
              <Text style={tw`text-md font-semibold`}>See all</Text>
            </View>
          </View>
          <View style={tw`p-2`}>
            <View style={tw`bg-green-400 rounded-3xl`}>

              <View style={tw`flex-row gap-3 p-4`}>
                <View>
                  <Image
                    source={{ uri: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' }}
                    style={tw`w-12 h-12 rounded-full`}
                  />
                </View>
                <View>
                  <Text style={tw`font-bold text-md`}>Mr. Jack Sparrow</Text>
                  <Text>Heart patient</Text>
                </View>
              </View>

              <View style={tw`flex-row justify-between`}>
                <View style={tw`flex-row p-4`}>

                  <View>
                    <Fontisto name="date" size={18} color="black" />
                  </View>
                  <View>
                    <Text>13 Aug,2023</Text>
                  </View>
                </View>
                <View style={tw`p-2`}>
                  <View style={[tw`rounded-xl overflow-hidden`, { width: 150 }]}>
                    <Button
                      title="Read More"
                      color="black" // Set button color to black
                      style={{ flex: 1, justifyContent: 'center' }} // Center button content
                    />
                  </View>
                </View>
              </View>


            </View>
          </View>
        </View>

        <View style={tw`flex-row justify-evenly`}>
          <View style={tw`bg-green-400 p-1 rounded-xl flex-1`}>

            <View style={tw`flex-row justify-center items-center gap-3`}>
              <View>
                <Entypo name="home" size={30} color="black" />
              </View>
              <View>
                <Text style={tw`text-md font-bold`}>Home</Text>
              </View>
            </View>
          </View>
          <View style={tw`flex-1 justify-center items-center`}>
            <Ionicons name="people" size={30} color="green" />
          </View>
          <View style={tw`flex-1 justify-center items-center`}>
            <Ionicons name="chatbubbles-outline" size={30} color="green" />
          </View>
        </View>


        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}


