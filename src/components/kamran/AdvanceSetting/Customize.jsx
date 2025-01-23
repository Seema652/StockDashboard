import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Link } from 'react-router-dom';

const Customize = () => {
  const [questions, setQuestions] = useState([]);

  const questionTypes = [
    "Mandatory",
    "Section Heading",
    "Horizontal Line",
    "Text Response",
    "Text Response Grid",
    "Dropdown",
    "Dropdown Grid",
    "Single Choice",
    "Single Choice Grid",
    "Multiple Choice",
    "Multiple Choice Grid",
    "Date/Time",
  ];

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const newQuestions = Array.from(questions);
    newQuestions.splice(result.destination.index, 0, result.draggableId);
    setQuestions(newQuestions);
  };

  return (
    <div className='card' style={{ display: 'flex', gap: '20px', padding: '20px' }}>
        <div className='table-responsive active-projects style-1'>
            <h3 className='tbl-caption text-light'>Customize</h3>
        </div>
     <form className='d-flex gap-2'>
      <div style={{ width: '30%', background: '#f5f5f5', padding: '10px' }}>
        <h3>Question Types</h3>
        <ul>
          {questionTypes.map((type, index) => (
            <li key={index} style={{ margin: '10px 0' }}>
              {type}
            </li>
          ))}
        </ul>
      </div>

      <div style={{ width: '70%', background: '#e9ecef', padding: '10px' }}>
        <h3>Form Builder</h3>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="form-builder">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{
                  minHeight: '300px',
                  border: '2px dashed #ddd',
                  padding: '10px',
                }}
              >
                {questions.length === 0 && (
                  <p style={{ color: '#888' }}>Drag a question here to get started!</p>
                )}
                {questions.map((question, index) => (
                  <Draggable key={question} draggableId={question} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          padding: '10px',
                          marginBottom: '10px',
                          background: '#fff',
                          border: '1px solid #ddd',
                          ...provided.draggableProps.style,
                        }}
                      >
                        {question}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      </form>
      <div className='mt-2'>
          <Link to='' className="btn btn-danger light ms-1">Cancel</Link>
          <button
            className="btn btn-primary me-1"
            type="submit">
            Next
          </button>
        </div>
    </div>
  );
};

export default Customize;
