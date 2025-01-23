import React from 'react'

function RelatedsTabs() {
  return (
    <div className=''>
      <div className='bg-secondary text-light'>
        <div className='d-flex align-items-center 'style={{justifyContent:"space-between", }}>
            <h5 className='p-2'>Module</h5>
       
        <h5 className='p-2'>Related Info Layout</h5>
        </div>
      </div>
      <p className='border mt-2 text-black w-150px'>Opportunities</p>
      <div className='d-flex align-items-center 'style={{justifyContent:"space-between", }}>
        <h5 className='text-black'>Business Card Layouts</h5>
        <h5 className='text-black'>Default Business Card Layouts </h5>
      </div>
      <div class="mb-3 form-check col-3">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">
                        Show Modules details on user request
                    </label>
                </div>
                <div class="mb-3 form-check col-3">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">
                    Show Related Modules in Tabpane View
                    </label>
                </div>
                <div class="mb-3 form-check col-3">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">
                    Show Edit View in Tabpane View
                    </label>
                </div>
    </div>
  )
}

export default RelatedsTabs
