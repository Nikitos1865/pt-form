<template>
    <div>
            <!-- <h1>Vitals</h1>
        <FormulateForm v-model="formValues" @submit="handleSubmit">
            <div>
            <FormulateInput name="SBP" label="SBP" validation="required"/>
            <FormulateInput name="DBP" label="DBP" validation="required"/>
            <FormulateInput name="HR" label="HR (Radial)" validation="required"/>
            <FormulateInput name="Resp" label="Resp" validation="required"/>
            <FormulateInput name="Temp" label="Temp" validation="required"/>
            <FormulateInput name="Resp" label="Resp" validation="required"/>
            <FormulateInput name="Weight" label="Weight" validation="required"/>
            <FormulateInput name="02" label="02 Saturation" validation="required"/>
            <FormulateInput type="submit" label="NEXT"/>
            </div>
        </FormulateForm>
        <h3>Values: </h3>
        {{ formValues }} -->
        </div>
    
</template>

<script>

    export default {

        data: () => ({
            formValues: {},
        }), 
        methods: {
            handleSubmit() {
                console.log(this.formValues)
            }
        }
    }; 
</script>