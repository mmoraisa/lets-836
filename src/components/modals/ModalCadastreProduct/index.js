import { SaveOutlined } from "@ant-design/icons"
import { Col, Form, Input, InputNumber, Modal, Row } from "antd"
import Swal from 'sweetalert2'
import { useContext, useEffect } from "react"
import ModalsContext from "../../../contexts/ModalsContext"

const ModalCadastreProduct = () => {

  const { modalCadastreProduct } = useContext(ModalsContext)
  const { close, visible } = modalCadastreProduct

  const [form] = Form.useForm();

  const checkPrice = (_, value) => {
    if (value > 100) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('Preço muito baixo!'));
  };

  const submitForm = async () => {
    let formValues

    try { formValues = await form.validateFields() }
    catch (e) {}

    if (formValues) {
      close()

      Swal.fire(
        'Produto cadastrado!',
        'Agora já é possível ver o produto na lista!',
        'success'
      )

      console.log('Dados do form:', formValues)
    }
  }

  useEffect(() => {
    if (visible) {
      form.resetFields()
    }
  }, [visible, form])

  return (
    <Modal
      title="Cadastro de produto"
      cancelText="Cancelar"
      onCancel={close}
      okText="Salvar"
      okButtonProps={{
        icon: <SaveOutlined />
      }}
      onOk={() => submitForm()}
      visible={visible}>
      <Form form={form}>
        <Form.Item
          label="Coleção"
          name="collection"
          rules={[
            { required: true, message: "O produto deve pertencer a uma coleção" }
          ]}>
          <Input />
        </Form.Item>
        <Form.Item label="Linha" name="modelLine" rules={[
            { required: true, message: "O produto deve pertencer a uma linha" }
          ]}>
          <Input placeholder="Linha do modelo" />
        </Form.Item>
        <Form.Item label="Nome do produto" name="name" rules={[
            { required: true, message: "O produto deve ter um nome" }
          ]}>
          <Input />
        </Form.Item>
        <Row gutter={16}>
          <Col md={24} lg={10}>
            <Form.Item
              label="Preço"
              name="price"
              rules={[
                { required: true, message: 'Você precisa preencher um preço!'},
                { validator: checkPrice }
              ]}>
              <InputNumber prefix="$" style={{ width: '100%' }}/>
            </Form.Item>
          </Col>
          <Col md={24} lg={14}>
            <Form.Item
              label="Preço com desconto"
              name="discountedPrice"
              rules={[
                { required: true, message: 'Você precisa preencher um preço!'},
                { validator: checkPrice }
              ]}>
              <InputNumber prefix="$" style={{ width: '100%' }}/>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  )
}

export default ModalCadastreProduct
