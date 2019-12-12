import React from 'react';
import './dashboard.page.scss';
import RandomPickerContainer from '../../components/randomPickerContainer/randomPickerContainer.component';

const DashboardPage: React.FC = () => {
  return (
    <div>

      {/* Header */}
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">Random Picker</a>
        </div>
      </nav>

      <RandomPickerContainer />
    </div>
  );
}

export default DashboardPage;
