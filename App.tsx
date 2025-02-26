import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View, ScrollView} from 'react-native';
import {CustomTextInput} from "@/shared/components/CustomTextInput";
import {useForm} from "react-hook-form";

export default function App() {

    const {control, handleSubmit} = useForm({
        defaultValues: {
            input: ""
        }
    });

    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
            >
                <CustomTextInput name={'input'} control={control} label={'Label'} clearIcon/>
                <CustomTextInput name={'input1'} control={control} label={'Label'} clearIcon rightIcon/>
                <CustomTextInput type={'password'} name='input3' control={control} label={'Label'} clearIcon rightIcon
                                 title="Title" helperText="Helper text"/>
                <CustomTextInput name={'input4'} control={control} label={'Label'} leftIcon type='password'/>

                {/*<CustomTextInput label={'Label'} clearIcon/>*/}
                {/*<CustomTextInput label={'Label'} clearIcon rightIcon state="disabled"/>*/}
                {/*<CustomTextInput name={'input2'} control={control}  label={'Label'} leftIcon state="disabled"/>*/}
                {/*<CustomTextInput type='password'  name={'input2'} control={control} label={'Label'} leftIcon rightIcon/>*/}
                {/*<CustomTextInput label={'Label'} clearIcon helperText="Helper text"/>*/}
                {/*<CustomTextInput label={'Label'} clearIcon rightIcon helperText="Helper text"/>*/}
                {/*<CustomTextInput label={'Label'} leftIcon helperText="Helper text"/>*/}
                {/*<CustomTextInput label={'Label'} leftIcon state="disabled" helperText="Helper text"/>*/}
                {/*<CustomTextInput label={'Label'} leftIcon rightIcon helperText="Helper text"/>*/}

                {/*<CustomTextInput label={'Label'} clearIcon title="Title"/>*/}
                {/*<CustomTextInput label={'Label'} clearIcon rightIcon title="Title"/>*/}
                {/*<CustomTextInput label={'Label'} leftIcon title="Title"/>*/}
                {/*<CustomTextInput label={'Label'} leftIcon rightIcon title="Title"/>*/}
                {/*<CustomTextInput label={'Label'} leftIcon rightIcon title="Title" state="disabled"/>*/}

                {/*<CustomTextInput label={'Label'} clearIcon title="Title" helperText="Helper text"/>*/}
                {/*<CustomTextInput label={'Label'} leftIcon title="Title" helperText="Helper text"/>*/}
                {/*<CustomTextInput name='input3' control={control} label={'Label'} leftIcon rightIcon title="Title" helperText="Helper text"/>*/}
                {/*<CustomTextInput label={'Label'} leftIcon rightIcon title="Title" state="disabled"*/}
                {/*                 helperText="Helper text"/>*/}


            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        padding: 16,
        gap: 24,
    },
    input: {
        width: 335,
        height: 48,
        borderWidth: 1,
        padding: 12,
        borderRadius: 12
    },
});
