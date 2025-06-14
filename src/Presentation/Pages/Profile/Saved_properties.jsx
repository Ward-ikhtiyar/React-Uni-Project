import './requests.css';
import { Edit } from '@mui/icons-material';
import Custom_Chip from './components/Chips/chip';
import { useState,useEffect } from 'react';
import Card from '../Home/components/Card';
import DisplayCard from '../Search-Proporties/components/RE-Listing/RE-Card/RE-Card';

import { getFavorites } from '../../../API/requests';

function SavedPropertiesPage() {
  const [chipVal, setChipVal] = useState(0);
  const [listings, setListings] = useState([]);
  const [edit, setEdit] = useState(false);

  async function handleGetProperties() {
    let fetchedProperties = await getFavorites();

    if (chipVal === 1) {
      fetchedProperties = fetchedProperties.filter(el => el.property.isForRent === true);
    } else if (chipVal === 2) {
      fetchedProperties = fetchedProperties.filter(el => el.property.isForRent === false);
    }

    setListings(fetchedProperties);
  }

  useEffect(() => {
    handleGetProperties();
    console.log(listings);
  }, [chipVal]);
    return (
    <div className="profile-info">
      <div className="requests-title">
        Archived
        <button onClick={() => setEdit(!edit)} className='colored-button'>
          <Edit /> Edit
        </button>
      </div>

      <div className='chips-row'>
        <Custom_Chip Click={setChipVal} title={"All"} index={0} val={chipVal} />
        <Custom_Chip Click={setChipVal} title={"Rent"} index={1} val={chipVal} />
        <Custom_Chip Click={setChipVal} title={"For Sale"} index={2} val={chipVal} />
      </div>

      <div className='profile-body'>
        {listings.map((element, index) => (
          <div
            key={index}
            onClick={() => {
              if (edit) {
                setListings(prev => prev.filter((_, i) => i !== index));
              }
            }}
            style={{ marginBottom: '20px' }}
          >
            <DisplayCard isEditable={edit} property={element.property} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SavedPropertiesPage;
