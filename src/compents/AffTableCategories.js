import React, { useState, useEffect, useRef } from 'react';
import MUIDataTable from 'mui-datatables';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { CloudinaryContext, Image } from 'cloudinary-react';
import axios from 'axios';

const AffTableCategories = ({ categories }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const cloudinaryWidgetRef = useRef();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widget.cloudinary.com/v2.0/global/all.js';
    script.async = true;
    script.onload = () => {
      cloudinaryWidgetRef.current = window.cloudinary.createUploadWidget(
        {
          cloudName: 'dgnv9nmqw',
          uploadPreset: 'movieProjet',
        },
        (error, result) => {
          if (!error && result && result.event === 'success') {
            handleImageUpload(result);
          }
        }
      );
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Supprimer la catégorie O/N')) {
      axios
        .delete(`http://localhost:3001/api/menus/${id}`)
        .then(() => {
          window.location.reload(true);
        })
        .catch((error) => {
          console.error('Error deleting category:', error);
        });
    }
  };

  const handleAddProduct = () => {
    setIsModalOpen(true);
  };

  const handleEdit = (id) => {
    setSelectedCategoryId(id);
    setIsUpdateModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsUpdateModalOpen(false);
    setTitle('');
    setPrice('');
    setImageUrl('');
    setSelectedCategoryId('');
  };

  const handleImageUpload = (result) => {
    if (result.event === 'success') {
      setImageUrl(result.info.secure_url);
    }
  };

  const handleSaveProduct = () => {
    const dataToAdd = {
      titre: title,
      prix: price,
      image: imageUrl,
    };

    if (selectedCategoryId) {
      axios
        .put(`http://localhost:3001/api/menus/${selectedCategoryId}`, dataToAdd)
        .then(() => {
          console.log('Updated successfully');
          window.location.reload(true);
        })
        .catch((error) => {
          console.error('Error updating category:', error);
        });
    } else {
      axios
        .post('http://localhost:3001/api/menus/', dataToAdd)
        .then(() => {
          console.log('Added successfully');
          window.location.reload(true);
        })
        .catch((error) => {
          console.error('Error adding category:', error);
        });
    }

    setIsModalOpen(false);
    setTitle('');
    setPrice('');
    setImageUrl('');
    setSelectedCategoryId('');
  };

  const handleCloudinaryUpload = () => {
    if (cloudinaryWidgetRef.current) {
      cloudinaryWidgetRef.current.open();
    }
  };

  const handleUpdateProduct = () => {
    const dataToUpdate = {
      titre: title,
      prix: price,
      image: imageUrl,
    };

    axios
      .put(`http://localhost:3001/api/menus/${selectedCategoryId}`, dataToUpdate)
      .then(() => {
        console.log('Updated successfully');
        window.location.reload(true);
      })
      .catch((error) => {
        console.error('Error updating category:', error);
      });

    setIsUpdateModalOpen(false);
    setTitle('');
    setPrice('');
    setImageUrl('');
    setSelectedCategoryId('');
  };

  const columns = [
    {
      label: 'Titre',
      name: 'titre',
    },
    {
      label: 'Image',
      name: 'image',
      options: {
        customBodyRender: (rowData) => (
          <img style={{ height: 50, width: 60, borderRadius: '10%' }} src={`${rowData}`} alt="" />
        ),
      },
    },
    {
      name: '_id',
      label: 'Actions',
      options: {
        customBodyRender: (value) => (
          <div>
            <span onClick={() => handleEdit(value)} style={{ cursor: 'pointer', marginRight: '10px' }}>
              <NoteAltOutlinedIcon color="success" />
            </span>
            <span onClick={() => handleDelete(value)} style={{ cursor: 'pointer' }}>
              <DeleteForeverRoundedIcon color="error" />
            </span>
          </div>
        ),
      },
    },
  ];

  return (
    <>
      <div style={{ marginBottom: '16px' }}>
        <Button variant="contained" onClick={handleAddProduct}>
          Add Product
        </Button>
      </div>
      {categories && categories?.length > 0 ? (
        <MUIDataTable title="Categories List" data={categories} columns={columns} />
      ) : null}

      {/* Modal for adding a product */}
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h5" mb={2}>
            {selectedCategoryId ? 'Edit Product' : 'Add Product'}
          </Typography>
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            margin="normal"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            label="Price"
            variant="outlined"
            fullWidth
            margin="normal"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <div>
            <Button onClick={handleCloudinaryUpload}>Upload Image</Button>
          </div>
          {imageUrl && (
            <CloudinaryContext cloudName="dgnv9nmqw">
              <Image publicId={imageUrl} width="100" height="100" />
            </CloudinaryContext>
          )}
          <Button
            onClick={handleSaveProduct}
            variant="contained"
            color="primary"
            style={{ marginTop: '16px' }}
          >
            {selectedCategoryId ? 'Save Changes' : 'Save Product'}
          </Button>
          <Button
            onClick={handleCloseModal}
            variant="contained"
            color="secondary"
            style={{ marginTop: '16px', marginLeft: '8px' }}
          >
            Close Modal
          </Button>
        </Box>
      </Modal>

      {/* Modal for updating a product */}
      <Modal open={isUpdateModalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h5" mb={2}>
            Update Product
          </Typography>
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            margin="normal"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            label="Price"
            variant="outlined"
            fullWidth
            margin="normal"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <div>
            <Button onClick={handleCloudinaryUpload}>Upload Image</Button>
          </div>
          {imageUrl && (
            <CloudinaryContext cloudName="dgnv9nmqw">
              <Image publicId={imageUrl} width="100" height="100" />
            </CloudinaryContext>
          )}
          <Button
            onClick={handleUpdateProduct}
            variant="contained"
            color="primary"
            style={{ marginTop: '16px' }}
          >
            Update Product
          </Button>
          <Button
            onClick={handleCloseModal}
            variant="contained"
            color="secondary"
            style={{ marginTop: '16px', marginLeft: '8px' }}
          >
            Close Modal
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default AffTableCategories;
