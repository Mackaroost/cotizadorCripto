# Cotizador de Precios de Criptomonedas

Esta es una aplicación simple de React que permite a los usuarios realizar un seguimiento del precio en tiempo real de las criptomonedas. Los usuarios pueden seleccionar la criptomoneda y la moneda en la que desean ver el precio.

## Características

1.  **Datos en Tiempo Real:** La aplicación obtiene datos de precios de criptomonedas en tiempo real desde la [API de CryptoCompare](https://min-api.cryptocompare.com/).
    
2.  **Componentes Estilizados:** El estilo de los componentes se realiza utilizando la biblioteca `emotion-styled`, proporcionando una forma limpia y mantenible de diseñar los componentes de React.
    
3.  **Diseño Adaptable:** La aplicación está diseñada para ser receptiva, asegurando una buena experiencia de usuario en diferentes dispositivos.
    
4.  **Hook Personalizado:** Se implementa un hook personalizado,  para gestionar la comunicación con la API y manejar los resultados devueltos. Proporciona una forma reutilizable y organizada de crear un componente de entrada y manejar el estado por medio de ello.
  

## Componentes

### App

El componente principal de la aplicación que gestiona el estado, obtiene datos de precios de criptomonedas y renderiza los componentes.

### useSelectOpcion

Un hook personalizado que proporciona un componente de entrada para la seleccion de variables, ademas acepta una matriz de opciones y devuelve la opción seleccionada.

### Resultado

Componente encargado de mostrar la información de precios en tiempo real de la criptomoneda seleccionada.

### Error

Un componente simple de error que muestra mensajes si el formulario no es completado con los datos requeridos.

### Estilo

El estilo de los componentes se logra utilizando la biblioteca `emotion styled`, proporcionando una forma limpia y organizada de aplicar estilos a los componentes de React.

## Exploralo
    
1.  Abre tu navegador y visita http://localhost:3000 para probar la aplicación.
    
## Contribuciones

¡Las contribuciones son bienvenidas! .