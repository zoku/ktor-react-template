type ExampleComponentProps = {
  title: string
}

export const ExampleComponent = (
  {
    title,
  }: ExampleComponentProps
) => {
  return (<div>{title}</div>)
}