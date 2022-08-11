export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL'
  }).format(price);
};

export const formatName = (name: string) => {
  if (name == 'FEMALE') return 'Feminino';
  if (name == 'MALE') return 'Masculino';
  if (name == 'OTHER') return 'Outro';
  return name;
};
