const numberWithCommas = (n: number): string => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
export default numberWithCommas
