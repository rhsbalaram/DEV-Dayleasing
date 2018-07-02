package com.dayLeasing.dao.model;

// default package
// Generated May 4, 2017 3:47:24 PM by Hibernate Tools 4.3.1

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Propertydetails generated by hbm2java
 */
@Entity
@Table(name = "propertydetails", catalog = "dayleasing")
public class Propertydetails implements java.io.Serializable {

	private Integer propertyId;
	private String propertyUuid;
	private String propertyName;
	private String propertyDescription;
	private String propertyType;
	private String propertyFeatures;
	private String propertyBorder;
	private Integer propertyMaxHunter;
	private String outLine;
	private Boolean isActive;
	private String userGuid;
	private String propertySlots;
	private String region;
	private String subRegion;
	private String country;
	private String address;


	public Propertydetails() {
	}

	public Propertydetails(String propertyUuid) {
		this.propertyUuid = propertyUuid;
	}

	public Propertydetails(String propertyUuid, String propertyName,
			String propertyDescription, String propertyType,
			String propertyFeatures, String propertyBorder,
			Integer propertyMaxHunter, String outLine, Boolean isActive,
			String userGuid) {
		this.propertyUuid = propertyUuid;
		this.propertyName = propertyName;
		this.propertyDescription = propertyDescription;
		this.propertyType = propertyType;
		this.propertyFeatures = propertyFeatures;
		this.propertyBorder = propertyBorder;
		this.propertyMaxHunter = propertyMaxHunter;
		this.outLine = outLine;
		this.isActive = isActive;
		this.userGuid = userGuid;
	}

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "PropertyID", unique = true, nullable = false)
	public Integer getPropertyId() {
		return this.propertyId;
	}

	public void setPropertyId(Integer propertyId) {
		this.propertyId = propertyId;
	}

	@Column(name = "PropertyUUID", nullable = false, length = 50)
	public String getPropertyUuid() {
		return this.propertyUuid;
	}

	public void setPropertyUuid(String propertyUuid) {
		this.propertyUuid = propertyUuid;
	}

	@Column(name = "PropertyName")
	public String getPropertyName() {
		return this.propertyName;
	}

	public void setPropertyName(String propertyName) {
		this.propertyName = propertyName;
	}

	@Column(name = "PropertyDescription")
	public String getPropertyDescription() {
		return this.propertyDescription;
	}

	public void setPropertyDescription(String propertyDescription) {
		this.propertyDescription = propertyDescription;
	}

	@Column(name = "PropertyType", length = 40)
	public String getPropertyType() {
		return this.propertyType;
	}

	public void setPropertyType(String propertyType) {
		this.propertyType = propertyType;
	}

	@Column(name = "PropertyFeatures")
	public String getPropertyFeatures() {
		return this.propertyFeatures;
	}

	public void setPropertyFeatures(String propertyFeatures) {
		this.propertyFeatures = propertyFeatures;
	}

	@Column(name = "PropertyBorder")
	public String getPropertyBorder() {
		return this.propertyBorder;
	}

	public void setPropertyBorder(String propertyBorder) {
		this.propertyBorder = propertyBorder;
	}

	@Column(name = "PropertyMaxHunter")
	public Integer getPropertyMaxHunter() {
		return this.propertyMaxHunter;
	}

	public void setPropertyMaxHunter(Integer propertyMaxHunter) {
		this.propertyMaxHunter = propertyMaxHunter;
	}

	@Column(name = "OutLine", length = 16777215)
	public String getOutLine() {
		return this.outLine;
	}

	public void setOutLine(String outLine) {
		this.outLine = outLine;
	}

	@Column(name = "IsActive")
	public Boolean getIsActive() {
		return this.isActive;
	}

	public void setIsActive(Boolean isActive) {
		this.isActive = isActive;
	}

	@Column(name = "UserGUID", length = 50)
	public String getUserGuid() {
		return this.userGuid;
	}

	public void setUserGuid(String userGuid) {
		this.userGuid = userGuid;
	}
	
	@Column(name = "PropertySlots")
	public String getPropertySlots() {
		return propertySlots;
	}

	public void setPropertySlots(String propertySlots) {
		this.propertySlots = propertySlots;
	}
	
	@Column(name = "Region", length = 250)
	public String getRegion() {
		return this.region;
	}

	public void setRegion(String region) {
		this.region = region;
	}

	@Column(name = "SubRegion", length = 250)
	public String getSubRegion() {
		return this.subRegion;
	}

	public void setSubRegion(String subRegion) {
		this.subRegion = subRegion;
	}

	@Column(name = "Country", length = 50)
	public String getCountry() {
		return this.country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	@Column(name = "Address", length = 250)
	public String getAddress() {
		return this.address;
	}

	public void setAddress(String address) {
		this.address = address;
	}


}
