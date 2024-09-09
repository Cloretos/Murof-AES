function criptografar() {
    const textoOriginal = document.getElementById("textoOriginal").value;
    const chave = document.getElementById("chave").value;

    const textoCriptografado = CryptoJS.AES.encrypt(textoOriginal, chave).toString();
    document.getElementById("textoCriptografado").value = textoCriptografado;

    const bytes = CryptoJS.AES.decrypt(textoCriptografado, chave);
    const textoDescriptografado = bytes.toString(CryptoJS.enc.Utf8);
    document.getElementById("textoDescriptografado").value = textoDescriptografado;
}