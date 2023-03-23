import testcat from '../assets/testcat.jpg'
import Card from './Card'

function Projects({ data }) {

  // URL to plugin later for app screenshot image
  // 'https://raw.githubusercontent.com/oliverthomas93/' + item.name + '/main/app_screenshot.jpg'

  return (
    <div className='mx-auto max-w-7xl md:flex md:flex-wrap md:px-5'>
      {data.map((item) => (
        <Card key={item.name} img={testcat} title={item.name} desc={item.description} buttontext={'Visit'} linkUrl={"https://oliverthomas93.github.io/" + item.name}/>
      ))}
    </div>
  )
}

export default Projects